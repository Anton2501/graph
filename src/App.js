import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';

const graphData = [
    {
        дата: 'JAN',
        данные1 : 97,
        данные2: 15,
    },
    {
        дата: 'FEB',
        данные1: 83,
        данные2: 16,
    },
    {
        дата: 'MAR',
        данные1: 15,
        данные2: 40,
    },
    {
        дата: 'APRL',
        данные1: 32,
        данные2: 9,
    },
    {
        дата: 'MAY',
        данные1: 4,
        данные2: 23,
    },
    {
        дата: 'JUN',
        данные1: 42,
        данные2: 35,
    },
    {
        дата: 'JUL',
        данные1: 30,
        данные2: 105,
    },
    {
        дата: 'AUG',
        данные1: -40,
        данные2: 90,
    },
    {
        дата: 'SEP',
        данные1: 30,
        данные2: 72,
    },
    {
        дата: 'NOV',
        данные1: 30,
        данные2: 12,
    },
    {
        дата: 'DEC',
        данные1: 30,
        данные2: 47,
    },
];

function App() {
    const renderCustomAxisTick = ({ x, y, payload }) => (
        <text
            x={x}
            y={y + 20}
            style={{ fontSize: '12px', fill: '#909090' }}
            textAnchor="middle"
        >
            {payload.value}
        </text>
    );

    const isSafari = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const windowWidth = isSafari() ? document.documentElement.clientWidth : window.innerWidth;

    const isMobile = windowWidth < 1160;

    return (
        <div className="App">
            <div className="wrap">
                <div className="views-statistics">
                    <ResponsiveContainer width={isMobile ? 900 : '100%'} height={200} id="123">
                        <AreaChart width={674} height={200} data={graphData} margin={{ left: 20, top: 10, right: 20 }}>
                            {/* <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#cfe1f5" stopOpacity={1} />
                                    <stop offset="95%" stopColor="#cfe1f5" stopOpacity={0.1} />
                                </linearGradient>
                            </defs> */}
                            <defs>
                                <rect x="10" y="10" width="100" height="100" fill="#fff" />
                            </defs>
                            <XAxis dataKey="дата" tick={renderCustomAxisTick} tickLine={false} axisLine={false} />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="данные1"
                                stroke="#3377bb"
                                fillOpacity={1}
                                fill="url(#colorUv)"
                                dot={{
                                    stroke: '#3377bb',
                                    strokeWidth: 2,
                                    r: 3,
                                    fill: '#fff',
                                }}
                                activeDot={{
                                    stroke: '#fff',
                                    strokeWidth: 2,
                                    r: 5,
                                    fill: '#3377bb',
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="данные2"
                                stroke="tomato"
                                fillOpacity={1}
                                fill="url(#colorUv)"
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
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default App;
