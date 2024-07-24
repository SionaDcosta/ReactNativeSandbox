const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const moment = require('moment')

const app = express()
const port = 8000
const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose
    .connect(
        'mongodb+srv://siona:siona@cluster0.c7dgdmr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error)
    })

app.listen(port, () => {
    console.log('Server is running on port 8000')
})

const Employee = require('./models/employee')
const Attendance = require('./models/attendance')

app.post('/addEmployee', async (req, res) => {
    try {
        const {
            employeeName,
            employeeId,
            designation,
            phoneNumber,
            dateOfBirth,
            joiningDate,
            activeEmployee,
            salary,
            address,
        } = req.body

        const newEmployee = new Employee({
            employeeName,
            employeeId,
            designation,
            phoneNumber,
            dateOfBirth,
            joiningDate,
            activeEmployee,
            salary,
            address,
        })

        await newEmployee.save()

        res.status(201).json({
            message: 'Employee added successfully',
            employee: newEmployee,
        })
    } catch (error) {
        console.log('Error creating employee', error)
        res.status(500).json({ message: 'Failed to add an employee' })
    }
})

app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find()
        res.status(200).json(employees)
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve the employees' })
    }
})

app.post('/attendance', async (req, res) => {
    try {
        const { employeeId, employeeName, date, status } = req.body

        const formattedDate = moment(date).format('MMMM D, YYYY')

        const existingAttendance = await Attendance.findOne({
            employeeId,
            date: formattedDate,
        })

        if (existingAttendance) {
            existingAttendance.status = status
            await existingAttendance.save()
            res.status(200).json(existingAttendance)
        } else {
            const newAttendance = new Attendance({
                employeeId,
                employeeName,
                date: formattedDate,
                status,
            })
            await newAttendance.save()
            res.status(200).json(newAttendance)
        }
    } catch (error) {
        res.status(500).json({ message: 'Error submitting attendance' })
    }
})

app.get('/attendances', async (req, res) => {
    try {
        const { date } = req.query

        const formattedDate = moment(date).format('MMMM D, YYYY')

        const attendanceData = await Attendance.find({ date: formattedDate })

        res.status(200).json(attendanceData)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching attendance data' })
    }
})

app.get('/attendance-report-all-employees', async (req, res) => {
    try {
        const { month, year } = req.query

        console.log('Query parameters:', month, year)

        const startDate = moment(`${year}-${month}-01`, 'YYYY-MM-DD')
            .startOf('month')
            .toDate()
        const endDate = moment(startDate).endOf('month').toDate()

        const report = await Attendance.aggregate([
            {
                $match: {
                    $expr: {
                        $and: [
                            {
                                $eq: [
                                    {
                                        $month: {
                                            $dateFromString: {
                                                dateString: '$date',
                                            },
                                        },
                                    },
                                    parseInt(req.query.month),
                                ],
                            },
                            {
                                $eq: [
                                    {
                                        $year: {
                                            $dateFromString: {
                                                dateString: '$date',
                                            },
                                        },
                                    },
                                    parseInt(req.query.year),
                                ],
                            },
                        ],
                    },
                },
            },
            {
                $group: {
                    _id: '$employeeId',
                    present: {
                        $sum: {
                            $cond: {
                                if: { $eq: ['$status', 'present'] },
                                then: 1,
                                else: 0,
                            },
                        },
                    },
                    absent: {
                        $sum: {
                            $cond: {
                                if: { $eq: ['$status', 'absent'] },
                                then: 1,
                                else: 0,
                            },
                        },
                    },
                    halfday: {
                        $sum: {
                            $cond: {
                                if: { $eq: ['$status', 'halfday'] },
                                then: 1,
                                else: 0,
                            },
                        },
                    },
                    holiday: {
                        $sum: {
                            $cond: {
                                if: { $eq: ['$status', 'holiday'] },
                                then: 1,
                                else: 0,
                            },
                        },
                    },
                },
            },
            {
                $lookup: {
                    from: 'employees',
                    localField: '_id',
                    foreignField: 'employeeId',
                    as: 'employeeDetails',
                },
            },
            {
                $unwind: '$employeeDetails',
            },
            {
                $project: {
                    _id: 1,
                    present: 1,
                    absent: 1,
                    halfday: 1,
                    name: '$employeeDetails.employeeName',
                    designation: '$employeeDetails.designation',
                    salary: '$employeeDetails.salary',
                    employeeId: '$employeeDetails.employeeId',
                },
            },
        ])
        console.log('report', report)

        res.status(200).json({ report })
    } catch (error) {
        console.error('Error generating attendance report:', error)
        res.status(500).json({ message: 'Error generating the report' })
    }
})

// Day-wise Attendance Endpoint
app.get('/attendance-day', async (req, res) => {
    try {
        const { date } = req.query

        const formattedDate = moment(date).format('MMMM D, YYYY')
        console.log(formattedDate)
        const attendanceData = await Attendance.find({ date: formattedDate })
        res.status(200).json(attendanceData)
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching day-wise attendance data',
        })
    }
})

// Week-wise Attendance Endpoint
app.get('/attendance-week', async (req, res) => {
    try {
        const { week, year } = req.query

        // Calculate start and end dates for the specified week using ISO week dates
        const startDate = moment()
            .isoWeekYear(year)
            .isoWeek(week)
            .startOf('isoWeek')
            .toDate()
        const endDate = moment(startDate).endOf('isoWeek').toDate()

        // Format dates for display purposes
        const formattedStartDate = moment(startDate).format('MMMM D, YYYY')
        const formattedEndDate = moment(endDate).format('MMMM D, YYYY')

        // Query attendance data for the specified date range using UTC dates
        const attendanceData = await Attendance.find({
            date: {
                $gte: new Date(startDate.toISOString()), // Convert to UTC date
                $lte: new Date(endDate.toISOString()), // Convert to UTC date
            },
        })

        console.log(attendanceData)
        console.log('Start Date:', formattedStartDate)
        console.log('End Date:', formattedEndDate)

        res.status(200).json(attendanceData)
    } catch (error) {
        console.error('Error fetching week-wise attendance data:', error)
        res.status(500).json({
            message: 'Error fetching week-wise attendance data',
        })
    }
})

// Month-wise Attendance Endpoint
app.get('/attendance-month', async (req, res) => {
    try {
        const { month, year } = req.query

        const startDate = moment(`${year}-${month}-01`, 'YYYY-MM-DD')
            .startOf('month')
            .toDate()
        const endDate = moment(startDate).endOf('month').toDate()

        const attendanceData = await Attendance.find({
            date: {
                $gte: startDate,
                $lte: endDate,
            },
        })

        res.status(200).json(attendanceData)
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching month-wise attendance data',
        })
    }
})

module.exports = app
