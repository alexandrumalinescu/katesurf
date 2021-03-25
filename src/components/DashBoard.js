import React from 'react';

const Dashboard = (props)=> {

    const handleLogout = () => {
        props.history.push('/login')
    }

    return (
        <div className='dashboard'>
            Welcome User!
            <button onClick={handleLogout}>LogOut</button>
        </div>
    )
}

export default Dashboard
