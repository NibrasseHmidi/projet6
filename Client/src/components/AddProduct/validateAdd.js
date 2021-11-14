export default function validateForm({  name,
        numero,
        address,
        tarifJ,
        tarifS,
        tarifM,
        caution,
        message,
        ville,
        category,}) {
	if (!name.trim()) {
		return 'Username required';
	}
	if (!address.trim()) {
		return 'address required';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	
	if (!numero) {
		return 'numro is required';
	} else if (numero.length < 8) {
		return 'numero needs to be 8 characters or more';
	}

	return null;
}
