export default function Validate_fields(values) {
    const errors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    ;
    const fieldsToValidate = [
        { key: 'firstName', label: 'First Name', required: true, minLength: 2, maxLength: 50 },
        { key: 'lastName', label: 'Last Name', required: true, minLength: 2, maxLength: 50 },
        { key: 'email', label: 'Email', required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    },
        { key: 'dateOfBirth', label: 'Date of Birth', required: true },
        { key: 'gender', label: 'Gender', required: true },
        { key: 'address', label: 'Address', required: true, minLength: 5, maxLength: 100 },
        { key: 'phone_num', label: 'Phone Number', required: true, numeric: true, minLength: 10, maxLength: 10 },
        { key: 'emergency_contact', label: 'Emergency Contact', required: true, numeric: true, minLength: 10, maxLength: 10 },
        { key: 'security_number', label: 'Security Number', required: true, numeric: true, minLength: 8, maxLength: 10 },
        { key: 'specialization', label: 'Specialization', required: true },
        { key: 'qualification', label: 'Qualification', required: true },
        { key: 'subjects', label: 'Subjects', required: true },
        { key: 'grade_level', label: 'Grade Level', required: true },
        { key: 'teaching_experience', label: 'Teaching Experience', required: true, numeric: true },
        { key: 'joining_date', label: 'Joining Date', required: true },
        { key: 'salary', label: 'Salary', required: true, numeric: true },
        { key: 'position', label: 'Position', required: true }
    ];
    fieldsToValidate.forEach(field => {
        const value = values[field.key];
        if (field.required && (!value || !value.trim())) {
            errors[field.key] = `${field.label} is required`;
        }
        if (field.numeric && (isNaN(value) || (value && value.length !== 10))) {
            errors[field.key] = `${field.label} must be 10 digits`;
        }
        if (field.pattern && !field.pattern.test(value)) {
            errors[field.key] = `Invalid ${field.label} format`;
        }
        if (field.minLength && value.length < field.minLength) {
            errors[field.key] = `${field.label} must be at least ${field.minLength} characters`;
        }
        if (field.maxLength && value.length > field.maxLength) {
            errors[field.key] = `${field.label} must be at most ${field.maxLength} characters`;
        }
    });

    return errors;
}
