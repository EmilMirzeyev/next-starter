import React from 'react'

const Users = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    return (
        <div>
            Users page ✅
        </div>
    )
}

export default Users
