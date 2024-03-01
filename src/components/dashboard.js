import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts';
import { RadialBarChart, RadialBar } from 'recharts';
import { PieChart, Pie, Secto } from 'recharts';


const datas = [
  {
    name: 'Jan ',
    Email: 1500,
    Call: 1500,
    Total: 3000,
  },
  {
      name: 'Feb',
      Email: 1500,
      Call: 2000,
      Total: 3500,
    },
    {
      name: 'Mar',
      Email: 1200,
      Call: 1600,
      Total: 2800,
    },
    {
      name: 'Apr',
      Email: 900,
      Call: 1500,
      Total: 2400,
    },
    {
      name: 'May',
      Email: 1900,
      Call: 1800,
      Total: 3700,
    },
    {
      name: 'Jun',
      Email: 2000,
      Call: 1200,
      Total: 3200,
    },
    {
      name: 'Jul',
      Email: 1000,
      Call: 1500,
      Total: 2500,
    },{
      name: 'Aug',
      Email: 1200,
      Call: 1800,
      Total: 3000,
    },
    {
      name: 'Sep',
      Email: 900,
      Call: 1800,
      Total: 2700,
    },{
      name: 'Oct',
      Email: 1000,
      Call: 900,
      Total: 2000,
    },
    {
      name: 'Nov',
      Email: 1000,
      Call: 700,
      Total: 1700,
    },
    {
      name: 'Dec',
      Email: 800,
      Call: 700,
      Total: 1500,
    }
];

const dataz = [

 {
  name: 'Jan ',
  CurrentWeek: 500,
  LastWeek: 1000,
  Total: 3000,
},
{
    name: 'Feb',
    CurrentWeek: 1500,
    LastWeek: 2000,
    Total: 3500,
  },
  {
    name: 'Mar',
    CurrentWeek: 700,
    LastWeek: 1200,
    Total: 2800,
  },
  {
    name: 'Apr',
    CurrentWeek: 2300,
    LastWeek: 1900,
    Total: 2400,
  },
  {
    name: 'May',
    CurrentWeek: 1500,
    LastWeek: 1700,
    Total: 3700,
  },
  {
    name: 'Jun',
    CurrentWeek: 2000,
    LastWeek: 1800,
    Total: 3200,
  },
 {
    name: 'Jul',
    CurrentWeek: 1800,
    LastWeek: 1500,
    Total: 3000,
  }

];

const datay =  [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 100 }

];
const datam =  [
  { name: 'Group A', value: 200 },
  { name: 'Group B', value: 300 }

];
const COLORS = ['#47d7bc', '#727cf5', '#ffae1f', '#db6a63'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function dashboard() {
  return (
    <div>
    <div className='row'>
    <div className='col-12 col-sm-12	col-md-12	col-lg-6	col-xl-6'>
   
   
    <div className='row' >
    <div className='col-12 col-sm-12	col-md-6	col-lg-6	col-xl-6'>
    <div className='dashboard-card  margin-dashboard'>
   <div className='row'>
    <div className='col-9'>
    <span style={{color: '#546ee6'}}>Social-FB </span>  
    <h6 class='font-design'>50</h6>
    <span class='font-sty'>20 Sloved Tickets</span>
    </div>
    <div className='col-3'>
    <div style={{marginTop:'10px'}}>
    <i class="bi bi-facebook fb-design"></i>
    </div>
    </div>
  
   </div>

   </div>
   </div>
   <div className='col-12 col-sm-12	col-md-6	col-lg-6	col-xl-6'>
   <div className='dashboard-card  margin-dashboard'>
   <div className='row'>
    <div className='col-9'>
    <span style={{    color: '#ffae1f'}}>Phone</span>  
    <h6 class='font-design'>5,015</h6>
    <span class='font-sty'>4,537 Sloved Tickets</span>
    </div>
    <div className='col-3'>
      <div style={{marginTop:'10px'}}>      
    <i class="bi bi-telephone-fill phone-design"></i>
    </div>
    </div>
  
   </div>

   </div>


   </div>
    </div>    

    <div className='row' >
    <div className='col-12 col-sm-12	col-md-6	col-lg-6	col-xl-6'>
    <div className='dashboard-card  margin-dashboard '>
   <div className='row'>
    <div className='col-9'>
    <span style={{    color: '#10c469'}}>Chat - Whatsapp</span>  
    <h6 class='font-design'>730</h6>
    <span class='font-sty'>652 Sloved Tickets</span>
    </div>
    <div className='col-3'>
    <div style={{marginTop:'10px'}}>
    <i class="bi bi-messenger chat-design"></i>
    </div>
    </div>
  
   </div>

   </div>
   </div>
   <div className='col-12 col-sm-12	col-md-6	col-lg-6	col-xl-6'>
   <div className='dashboard-card margin-dashboard'>
   <div className='row'>
    <div className='col-9'>
    <span style={{color: '#c62d4f'}}>Email</span>  
    <h6 class='font-design'>6,884</h6>
    <span class='font-sty'>6,227 Sloved Tickets</span>
    </div>
    <div className='col-3'>
    <div style={{marginTop:'10px'}}>
    <i class="bi bi-mailbox email-design"></i>
    </div>
    </div>
  
   </div>

   </div>


   </div>
    </div>    



    </div>
    <div className='col-12 col-sm-12	col-md-12	col-lg-6	col-xl-6' style={{marginTop:'20px'}}>


    <ResponsiveContainer  class='box-styles' style={{backgroundColor:'#fff',borderRadius:'10px', border:'1px solid #f0e8ff',    boxshadow: '0px 0px 35px 0px rgba(154, 161, 171, 0.15)'}}>
    
    <BarChart
          width={500}
          height={300}
          data={datas}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Email" barSize={10}  stackId="a" fill="#727cf5" />
          <Bar dataKey="Call"  barSize={10}  stackId="a" fill="#47d7bc" />
          <Bar dataKey="Total" barSize={10}  fill="#c7d9f5" />
        </BarChart>
        </ResponsiveContainer>

    </div>

    </div>

    <div className='row'>
    <div className='col-12 col-sm-12	col-md-12	col-lg-6	col-xl-6'>
      <div className='dashboard-card' style={{height:'400px', backgroundColor:'#fff', marginTop:'15px', padding:'15px', borderRadius:'10px'}}>
    <ResponsiveContainer >
        <LineChart
          width={500}
          height={200}
          data={dataz}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
           <Line type="monotone" dataKey="volume" stroke="#82ca9d" 
   dot={{ stroke: 'red', strokeWidth: 8, r: 8, strokeDasharray:''}} />
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dot={false} type="monotone" dataKey="CurrentWeek" stroke="#2fd4a4"  strokeWidth={3}  />
          <Line dot={false} type="monotone" dataKey="LastWeek" stroke="#878ff6" strokeWidth={3}  />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
    <div className='col-12 col-sm-12	col-md-12	col-lg-6	col-xl-6'>
      <div className='dashboard-card' style={{height:'400px', backgroundColor:'#fff', marginTop:'15px', padding:'20px', borderRadius:'10px'}}>
    <table class="table" style={{ fontsize: '12px !important'}}>
  <thead>
    <tr>
      <th scope="col">Task </th>
      <th scope="col"><i class="bi bi-person-fill"></i> Cust. Name</th>
      <th scope="col"><i class="bi bi-telephone-fill"></i> Phone No.</th>
      <th scope="col"><i class="bi bi-person-badge-fill"></i> Assig. To</th>
      <th scope="col"><i class="bi bi-reply-fill"></i> CallbackTime</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><i class="bi bi-person-circle" style={{color:'#673ab7'}}></i> John Doe</td>
      <td>+1234567890</td>
      <td>Agent1</td>
      <td>2024-02-25 10:00:00</td>
      <td><span  class='bg-dangers'>Pending</span></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><i class="bi bi-person-circle" style={{color:'#673ab7'}}></i> Jane Smith.</td>
      <td>+9876543210</td>
      <td>Agent2</td>
      <td>2024-02-25 11:30:00</td>
      <td><span class='bg-primarys'>In Progress</span></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td ><i class="bi bi-person-circle" style={{color:'#673ab7'}}></i> Bob Johnson.</td>
      <td>+5551234567</td>
      <td>Agent3</td>
      <td>2024-02-26 14:15:00 </td>

      <td><span class='bg-successa' style={{backgroundcolor: '#26bf941a !important',
    color: '#26bf94 !important'}}>Completed</span></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td ><i class="bi bi-person-circle" style={{color:'#673ab7'}}></i> Alice Brown</td>
      <td>+3334445555</td>
      <td>Agent1</td>
      <td>2024-02-27 09:45:00</td>
      <td><span class='bg-dangers'>Pending</span></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td><i class="bi bi-person-circle" style={{color:'#673ab7'}}></i> John Doe</td>
      <td>+1234567890</td>
      <td>Agent1</td>
      <td>2024-02-25 10:00:00</td>
      <td><span class='bg-primarys'>In Progress</span></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td><i class="bi bi-person-circle" style={{color:'#673ab7'}}></i> John Doe</td>
      <td>+1234567890</td>
      <td>Agent1</td>
      <td>2024-02-25 10:00:00</td>
      <td><span class='bg-successa' style={{backgroundcolor: '#26bf941a !important',
    color: '#26bf94 !important'}}>Completed</span></td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td><i class="bi bi-person-circle" style={{color:'#673ab7'}}></i> John Doe</td>
      <td>+1234567890</td>
      <td>Agent1</td>
      <td>2024-02-25 10:00:00</td>
      <td><span  class='bg-dangers'>Pending</span></td>
    </tr>

  </tbody>
</table>
</div>
</div>

</div>

<div className='row'>
  <div className='col-md-6'>
 
    <div className='row'>
    <div className='col-12 col-sm-12	col-md-12	col-lg-6	col-xl-6'>
      <div className='dashboard-card' style={{height:'270px', backgroundColor:'#fff', marginTop:'15px',  borderRadius:'10px'}}>
  <h6>Active Members</h6>
  <table class="table" style={{ fontsize: '12px !important'}}>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Member Profile</th>
      <th scope="col">Status</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <img src='https://bootdey.com/img/Content/avatar/avatar3.png' style={{    height: '30px',  borderradius: '50%'}} />
      </th>
      <td> Priya Anand</td>
       <td><span  class='bg-away'>Away</span></td>
    </tr>
    <tr>
    <th scope="row">
        <img src='https://bootdey.com/img/Content/avatar/avatar3.png' style={{    height: '30px',  borderradius: '50%'}} />
      </th>
      <td> Jesicca</td>
      <td><span class='bg-successa'>Working</span></td>
    </tr>
    <tr>
    <th scope="row">
        <img src='https://bootdey.com/img/Content/avatar/avatar7.png' style={{    height: '30px',  borderradius: '50%'}} />
      </th>
      <td > Prakash</td>

      <td><span class='bg-successa' style={{backgroundcolor: '#26bf941a !important',
    color: '#26bf94 !important'}}>Working</span></td>
    </tr>
    <tr>
    <th scope="row">
        <img src='https://bootdey.com/img/Content/avatar/avatar6.png' style={{    height: '30px',  borderradius: '50%'}} />
      </th>
      <td > Arun Kumar</td>
         <td><span class='bg-dangers'>Absent</span></td>
    </tr>


  </tbody>
</table>

  </div>
  </div>
  <div className='col-12 col-sm-12	col-md-12	col-lg-6	col-xl-6'>
      <div className='dashboard-card' style={{height:'280px', backgroundColor:'#fff', marginTop:'15px',  borderRadius:'10px', fontsize: '13px !important'}}>
  <h6>Notifications</h6>
  <div className='row'>
    <div className='col-2'>
      <div >
      <span className='iconshap'>
      <i class="bi bi-stickies"></i>
        </span>
        </div>
    </div>
    <div className='col-9'>
    <span style={{}}>
    Top 5 Tools for Call Center Knowledge Bases
    </span>
    </div>
  </div>
  <div className='row' style={{marginTop:'20px'}}>
    <div className='col-2'>
      <div >
      <span className='iconshap'>
      <i class="bi bi-basket"></i>
        </span>
        </div>
    </div>
    <div className='col-9' style={{fontsize:'12px !important'}}>
    <span >
    5D Framework - Diagnose, Define, Design, Develop, Deploy
    </span>
    </div>
  </div>
  <div className='row' style={{marginTop:'20px'}}>
    <div className='col-2'>
      <div>
      <span className='iconshap'>
      <i class="bi bi-basket"></i>
        </span>
        </div>
    </div>
    <div className='col-9' style={{fontsize:'12px !important'}}>
    <span style={{}}>
    Standardized Responses – Avoiding Confusion and Inconsistency
    </span>
    </div>
  </div>
  <div className='row' style={{marginTop:'20px'}}>
    <div className='col-2'>
      <div >
      <span className='iconshap'>
      <i class="bi bi-stickies"></i>
        </span>
        </div>
    </div>
    <div className='col-9' style={{fontsize:'12px !important'}}>
    <span style={{}}>
    Reduces Call Times, Improves Efficiency
    </span>
    </div>
  </div>
  </div>
  </div>

    </div>


  </div>
  <div className='col-md-6'>
    <div className='row'>
  <div className='col-12 col-sm-12	col-md-12	col-lg-6	col-xl-6'>
      <div className='dashboard-card' style={{height:'220px', backgroundColor:'#fff', marginTop:'15px',  borderRadius:'10px'}}>
<div className='row'>
  <div className='col-md-5'>
 
  <PieChart width={800} height={200} >
        <Pie
          data={datay}
          cx={90}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {datay.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        </PieChart>
  </div>
  <div className='col-md-7'>
  <h6 style={{fontStyle:'underline'}}>Since last week</h6>
  <ul  style={{paddingTop:'60px',listStyle: 'none'}}>
          <li>30% - Chat Whatsapp </li>
          <li>70% - Phone</li>
        </ul>
    </div>
</div>

 
</div>
</div>
<div className='col-12 col-sm-12	col-md-12	col-lg-6	col-xl-6'>
      <div className='dashboard-card' style={{height:'220px', backgroundColor:'#fff', marginTop:'15px',  borderRadius:'10px'}}>
<div className='row'>
  <div className='col-md-5'>

  <PieChart width={800} height={200} >
        <Pie
          data={datam}
          cx={90}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {datam.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        </PieChart>
  </div>
  <div className='col-md-7'>
  <h6 style={{fontStyle:'underline'}}>Since last month</h6>
  <ul  style={{paddingTop:'60px',listStyle: 'none'}}>
          <li>80% - Chat Whatsapp </li>
          <li>20% - Phone</li>
        </ul>
    </div>
</div>

 
</div>
</div>
</div>

  </div>

</div>
    </div>

  )
}

export default dashboard
