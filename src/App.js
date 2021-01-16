import React from 'react';
import {XAxis, Tooltip, ResponsiveContainer, LabelList, LineChart, Line } from 'recharts';
import './App.css';

const graphData = [
    {
        дата: 'JAN',
        данные1 : 9700,
        данные2: 1500,
    },
    {
        дата: 'FEB',
        данные1: 8300,
        данные2: 1600,
    },
    {
        дата: 'MAR',
        данные1: 1500,
        данные2: 4000,
    },
    {
        дата: 'APR',
        данные1: 3200,
        данные2: 900,
    },
    {
        дата: 'MAY',
        данные1: 400,
        данные2: 2300,
    },
    {
        дата: 'JUN',
        данные1: 4200,
        данные2: 3500,
    },
    {
        дата: 'JUL',
        данные1: 3000,
        данные2: 10000,
    },
    {
        дата: 'AUG',
        данные1: -2000,
        данные2: 9000,
    },
    {
        дата: 'SEP',
        данные1: 2100,
        данные2: 7200,
    },
    {
        дата: 'NOV',
        данные1: 3800,
        данные2: 1200,
    },
    {
        дата: 'DEC',
        данные1: 3000,
        данные2: 4700,
    },
];

function App() {
    const renderCustomAxisTick = ({ x, y, payload }) => {
        return (
            <text
                x={x}
                y={y + 20}
                style={{ fontSize: '12px', fill: '#909090' }}
                textAnchor="middle"
            >
                {payload.value}
            </text>
        )
    };

    const renderRedAreaData = ({ x, y, value }) => (
        <text
            x={x}
            y={y - 10}
            style={{ fontSize: '14px', fill: 'red', fontWeight: 'bold' }}
            textAnchor="middle"
        >
            {value}
        </text>
    );

    const renderGreenAreaData = ({ x, y, value }) => (
        <text
            x={x}
            y={y - 10}
            style={{ fontSize: '14px', fill: 'rgb(113, 204, 81)', fontWeight: 'bold' }}
            textAnchor="middle"
        >
            {value}
        </text>
    );

    const isSafari = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const windowWidth = isSafari() ? document.documentElement.clientWidth : window.innerWidth;

    const isMobile = windowWidth < 1160;

    return (
        <div className="App">
            <div className="wrap">
                <div className="views-statistics">
                    <ResponsiveContainer width={isMobile ? 900 : '100%'} height={400} id="123">
                        <LineChart
                            width={674}
                            height={400}
                            data={graphData}
                            margin={{ left: 20, top: 10, right: 20 }}
                        >
                            <XAxis dataKey="дата" tick={renderCustomAxisTick} tickLine={false} axisLine={false} />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="данные2"
                                stroke="rgb(113, 204, 81)"
                                fillOpacity={1}
                                fill="transparent"
                                dot={{
                                    stroke: 'rgb(113, 204, 81)',
                                    strokeWidth: 2,
                                    r: 3,
                                    fill: '#fff',
                                }}
                                activeDot={{
                                    stroke: '#fff',
                                    strokeWidth: 2,
                                    r: 5,
                                    fill: 'rgb(113, 204, 81)',
                                }}
                                strokeWidth={4}
                            >
                                <LabelList dataKey="данные2" position="top" content={renderGreenAreaData} />
                            </Line>
                            <Line
                                type="monotone"
                                dataKey="данные1"
                                stroke="red"
                                fillOpacity={1}
                                fill="transparent"
                                dot={{
                                    stroke: 'red',
                                    strokeWidth: 2,
                                    r: 3,
                                    fill: '#fff',
                                }}
                                activeDot={{
                                    stroke: '#fff',
                                    strokeWidth: 2,
                                    r: 5,
                                    fill: 'orangered',
                                }}
                                strokeWidth={4}
                            >
                                <LabelList dataKey="данные1" position="top" content={renderRedAreaData} />
                            </Line>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default App;
