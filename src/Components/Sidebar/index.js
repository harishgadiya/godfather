import React from 'react';
import './Sidebar.css';
import employeeData from '../../EmployeeData';

const drawerWidth = 400;

const Sidebar = ({ setEmployee, selectedEmployee}) => {
    // const [selectedEmployee, setSelectedEmployee] = useState(0);

    const setActiveEmployee = index => {
        console.log(index, '>>>')
        setEmployee(index)
    }
    return (
        <div className="wrapper">
            <div className="logo"></div>
            <div className="employees">
                {employeeData.employees.map((employee, index) => (
                    <div
                        key={index}
                        className={
                            `
                                employeeName
                                ${selectedEmployee === index ? 'active' : ''}
                                ${employee.colleagues.includes(employeeData.employees[selectedEmployee].name) ? 'selected' : '' }
                            `
                        }
                        onClick={() => setActiveEmployee(index)}
                        style={{fontSize:`${employee.popularity * 10}px`}}
                    >
                        {employee.name}
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Sidebar;
