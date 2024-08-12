import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from './AdminSidebar';

const EditUser = () => {
    const location = useLocation();
    const user = location.state;
    const [formData, setFormData] = useState({ ...user });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:9001/api/users/${user.id}`, formData)
            .then(() => navigate('/user-management'))
            .catch(error => console.error('Error updating user:', error));
    };

    return (
        <div className="userman-user-management">
            <AdminSidebar />
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
        </div>
    );
};

export default EditUser;
