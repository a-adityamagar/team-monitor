import React, { useState } from "react";
import Lisa from "../Assets/Images/lisa.jpg";
import TotalEmployee from "../Assets/Images/Total-employee.png";
import TotalTeam from "../Assets/Images/Total-team.png";
import CurrentlyWorking from "../Assets/Images/Currently-working.png";
import OnBreak from "../Assets/Images/On-break.png";
import AppNo from "../Assets/Images/App-no-installed.png";
import Img1 from "../Assets/Images/img1.png";
import Img2 from "../Assets/Images/img2.png";
import Img3 from "../Assets/Images/img3.png";
import Img4 from "../Assets/Images/img4.png";
import Img5 from "../Assets/Images/img5.png";
import Img6 from "../Assets/Images/img6.png";
import Img7 from "../Assets/Images/img7.png";
import Img8 from "../Assets/Images/img8.png";
import Img9 from "../Assets/Images/img9.png";
import Img10 from "../Assets/Images/img10.png";
import { Icon } from "@iconify/react";
import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

export default function Hero() {
  const data = [
    { name: "Excel", pv: 40000 },
    { name: "GitHub", pv: 20000 },
    { name: "Facebook", pv: 25000 },
    { name: "ChartGPT", pv: 15000 },
    { name: "VS Code", pv: 20000 },
    { name: "Slack", pv: 5000 },
    { name: "Youtube", pv: 15000 },
    { name: "Word", pv: 20000 },
    { name: "Chrome", pv: 17000 },
  ];

  const secondChartData = [
    {
      name: "12 July",
      uv: 25000,
      pv: 7000,
      amt: 5000,
    },
    {
      name: "13 July",
      uv: 4000,
      pv: 2000,
      amt: 6000,
    },
    {
      name: "14 July",
      uv: 10000,
      pv: 7000,
      amt: 3000,
    },
    {
      name: "15 July",
      uv: 2000,
      pv: 20000,
      amt: 4000,
    },
    {
      name: "16 July",
      uv: 4000,
      pv: 10000,
      amt: 15000,
    },
    {
      name: "17 July",
      uv: 20000,
      pv: 5800,
      amt: 8500,
    },
    {
      name: "18 July",
      uv: 3490,
      pv: 4300,
      amt: 20000,
    },
  ];

  const imgaeData = [
    { id: 1, img: Img1, title: "Lana" },
    { id: 2, img: Img2, title: "Lana" },
    { id: 3, img: Img3, title: "Lana" },
    { id: 4, img: Img4, title: "Lana" },
    { id: 5, img: Img5, title: "Lana" },
    { id: 6, img: Img6, title: "Lana" },
    { id: 7, img: Img7, title: "Lana" },
    { id: 8, img: Img8, title: "Lana" },
    { id: 9, img: Img9, title: "Lana" },
    { id: 10, img: Img10, title: "Lana" },
  ];

  const tableData = [
    {
      name: "Lex",
      department: "IT Department",
      clockin: "8:45 am",
      hourworked: "8 hour",
    },
    {
      name: "Lex",
      department: "IT Department",
      clockin: "8:45 am",
      hourworked: "8 hour",
    },
    {
      name: "Lex",
      department: "IT Department",
      clockin: "8:45 am",
      hourworked: "8 hour",
    },
    {
      name: "Lex",
      department: "IT Department",
      clockin: "8:45 am",
      hourworked: "8 hour",
    },
    {
      name: "Lex",
      department: "IT Department",
      clockin: "8:45 am",
      hourworked: "8 hour",
    },
    {
      name: "Lex",
      department: "IT Department",
      clockin: "8:45 am",
      hourworked: "8 hour",
    },
  ];

  const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;
    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text
          x={x + width / 2}
          y={y - radius}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value.split(" ")[1]}
        </text>
      </g>
    );
  };

  const [isNavVisible, setNavVisible] = useState(false);

  // Function to toggle the nav visibility
  const toggleNav = () => {
    setNavVisible(!isNavVisible);

    // Add or remove the class to the body or main container
    if (!isNavVisible) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
    document.querySelector(".burger").classList.toggle("toggle");
  };

  return (
    <div className="hero">
      <div className="nav-top">
        <div class="burger" onClick={toggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="nav-top-btns">
          <button className="hide-btn">
            <Icon className="rect-icon" icon="mi:filter" />
          </button>
          <button className="hide-btn">
            <Icon className="rect-icon" icon="mdi:file-download" />
          </button>

          <button className="rect-btn">
            <Icon className="rect-icon" icon="mi:filter" />
            Filter details
          </button>
          <button className="rect-btn">
            <Icon className="rect-icon" icon="mdi:file-download" />
            Download
          </button>
          <button className="round-btn">
            <Icon className="icon" icon="il:search" />
          </button>
          <button className="round-btn">
            <Icon className="icon" icon="il:bell" />
          </button>
          <img id="user" src={Lisa} alt="User" />
        </div>
      </div>

      <div className="hero-details">
        <div>
          <div className="hero-dtls-left">
            <p>Total Employee</p>
            <h3>138</h3>
          </div>
          <div className="hero-dtls-right">
            <img src={TotalEmployee} alt="Icon" />
          </div>
        </div>
        <div>
          <div className="hero-dtls-left">
            <p>Total Team</p>
            <h3>12</h3>
          </div>
          <div className="hero-dtls-right">
            <img src={TotalTeam} alt="Icon" />
          </div>
        </div>
        <div>
          <div className="hero-dtls-left">
            <p>Currently Working</p>
            <h3>9</h3>
          </div>
          <div className="hero-dtls-right">
            <img src={CurrentlyWorking} alt="Icon" />
          </div>
        </div>
        <div>
          <div className="hero-dtls-left">
            <p>On Break</p>
            <h3>2</h3>
          </div>
          <div className="hero-dtls-right">
            <img src={OnBreak} alt="Icon" />
          </div>
        </div>
        <div>
          <div className="hero-dtls-left">
            <p>App Not Installed</p>
            <h3>2</h3>
          </div>
          <div className="hero-dtls-right">
            <img src={AppNo} alt="Icon" />
          </div>
        </div>
      </div>

      <div className="hero-mid">
        <div className="hero-mid-left">
          <p>Activity Track</p>
          <h3>Most used App</h3>
          <div className="hero-mid-left-down">
            <p className="vertical-text">No of employee</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{ fontSize: "12px" }} />
                <YAxis style={{ fontSize: "12px" }} />
                <Tooltip />
                <Bar dataKey="pv" fill="rgba(255, 170, 41, 1)" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="hero-mid-right">
          <div className="hero-mid-right-top">
            <p>Recent Proof of work</p>
            <button>
              View all
              <Icon icon="gridicons:arrow-right" id="right-arrow" />
            </button>
          </div>
          <div className="hero-mid-right-bottom">
            {imgaeData.map((item) => (
              <div className="hero-mid-right-container" key={item.id}>
                <div className="hero-mid-right-img-container">
                  <img src={item.img} alt="Image" />
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-left">
          <p>Work Analysis</p>
          <div className="hero-bottom-left-mid">
            <h3>Healthy</h3>
            <p>
              <Icon icon="typcn:arrow-up" className="up-arrow" />
              5% than last month
            </p>
          </div>
          <div className="hero-bottom-left-bottom">
            <p className="vertical-text">No of employee</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                width={500}
                height={300}
                data={secondChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{ fontSize: "12px" }} />
                <YAxis style={{ fontSize: "12px" }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="rgba(0, 63, 182, 1" barSize={10} />
                <Bar dataKey="pv" fill="rgba(0, 164, 107, 1" barSize={10} />
                <Bar dataKey="amt" fill="rgba(255, 106, 97, 1)" barSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="hero-bottom-right">
          <div className="hero-bottom-right-top">
            <p>Work Hour Summary</p>
            <button>
              View all
              <Icon icon="gridicons:arrow-right" id="right-arrow" />
            </button>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Clock In</th>
                  <th>Hour Worked</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((val, key) => (
                  <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.department}</td>
                    <td>{val.clockin}</td>
                    <td>{val.hourworked}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
