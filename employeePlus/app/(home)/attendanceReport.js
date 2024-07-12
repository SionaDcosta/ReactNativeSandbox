import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import axios from 'axios';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundColor: '#44a4c9',
  backgroundGradientFrom: '#44a4c9',
  backgroundGradientTo: '#6bafc9',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 50) => `rgba(0,0,0 , ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const AttendanceReport = () => {
  const [attendanceData, setAttendanceData] = useState({
    day: { present: 0, absent: 0 },
    week: { present: 0, absent: 0 },
    month: { present: 0, absent: 0 },
  });

    console.log(attendanceData);
  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const dayResponse = await axios.get('http://10.0.2.2:8000/attendance-day', {
          params: { date: new Date().toISOString().split('T')[0] },
        });
        const weekResponse = await axios.get('http://10.0.2.2:8000/attendance-week', {
          params: { week: new Date().getWeek(), year: new Date().getFullYear() },
        });
        const monthResponse = await axios.get('http://10.0.2.2:8000/attendance-month', {
          params: { month: new Date().getMonth() + 1, year: new Date().getFullYear() },
        });

        setAttendanceData({
          day: {
            present: dayResponse.data.filter((d) => d.status === 'present').length,
            absent: dayResponse.data.filter((d) => d.status === 'absent').length,
          },
          week: {
            present: weekResponse.data.filter((d) => d.status === 'present').length,
            absent: weekResponse.data.filter((d) => d.status === 'absent').length,
          },
          month: {
            present: monthResponse.data.filter((d) => d.status === 'present').length,
            absent: monthResponse.data.filter((d) => d.status === 'absent').length,
          },
        });
      } catch (error) {
        console.error('Error fetching attendance data', error);
      }
    };

    fetchAttendanceData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Attendance Report</Text>
      <Text style={styles.subtitle}>Day-wise Report</Text>
      <BarChart
        data={{
          labels: ['Present', 'Absent'],
          datasets: [
            {
              data: [attendanceData.day.present, attendanceData.day.absent],
            },
          ],
        }}
        width={screenWidth - 30}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
      <Text style={styles.subtitle}>Week-wise Report</Text>
      <BarChart
        data={{
          labels: ['Present', 'Absent'],
          datasets: [
            {
              data: [attendanceData.week.present, attendanceData.week.absent],
            },
          ],
        }}
        width={screenWidth - 30}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
      <Text style={styles.subtitle}>Month-wise Report</Text>
      <BarChart
        data={{
          labels: ['Present', 'Absent'],
          datasets: [
            {
              data: [attendanceData.month.present, attendanceData.month.absent],
            },
          ],
        }}
        width={screenWidth - 30}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  var yearStart = new Date(date.getFullYear(), 0, 1);
  var weekNo = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
  return weekNo;
};

export default AttendanceReport;
