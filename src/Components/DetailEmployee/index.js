import React from 'react';
import './DetailEmployee.css';
import employeeData from '../../EmployeeData';
import Slider from '../Slider';

const DetailEmployee = ({selectiveEmployee}) => {
    return (
        <div className="detailWrapper">
            <div className="employee-description">
                <div className="employee-picture">
                    <img src={`../../images/${employeeData.employees[selectiveEmployee].image}`} />
                    <div className="employee-name">
                        {employeeData.employees[selectiveEmployee].name}
                    </div>
                </div>
                <div className="popularity">
                        <Slider />
                    </div>
                <div className="details">
                    <h2>Biography</h2>
                    <div>
                        {employeeData.employees[selectiveEmployee].biography}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DetailEmployee;
