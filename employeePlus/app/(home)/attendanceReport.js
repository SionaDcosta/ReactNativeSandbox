import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import axios from 'axios';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get('http://192.168.58.94:8000/attendance');
        setAttendanceData(response.data);
      } catch (error) {
        console.error('Error fetching attendance data', error);
      }
    };

    fetchAttendanceData();
  }, []);

  const data = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [attendanceData.day.present, attendanceData.day.absent],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Attendance Report</Text>
      <Text style={styles.subtitle}>Day-wise Report</Text>
      <BarChart
        data={data}
        width={screenWidth - 30}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
      {/* Repeat similar charts for week-wise and month-wise data */}
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

export default AttendanceReport;
