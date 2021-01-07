import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', email: '', address: '', mobile: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.email || !user.address || !user.mobile) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Email</label>
			<input type="email" name="email" value={user.email} onChange={handleInputChange} />
            <label>Address</label>
			<input type="text" name="address" value={user.address} onChange={handleInputChange} />
            <label>Mobile</label>
			<input type="number" name="mobile" value={user.mobile} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm