import React, { useState, Fragment } from 'react'
import AddUserForm from './AddUsers'
import EditUserForm from './EditUsers'
import UserTable from './UserData'

const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Test', email: 'test@yahoo.com', address: 'Delhi', mobile: 987654321 },
		{ id: 2, name: 'User', email: 'abc@gmail.com', address: 'U.P', mobile: 123456789 },
	]

	const initialFormState = { id: null, name: '', email: '', address: '', mobile: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	//operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

    setCurrentUser({ id: user.id, 
      name: user.name, 
      email: user.email, 
      address: user.address, 
      mobile: user.mobile })
	}

	return (
		<div className="container">
			<h1>User Data Management</h1>
			<div>
				<div>
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div>
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App