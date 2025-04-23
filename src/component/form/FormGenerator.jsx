import PropTypes from "prop-types";
import {
    Autocomplete,
    NumberInput,
    Select,
    TextInput
} from "@mantine/core";
import {DateTimePicker} from "@mantine/dates";

export default function FormGenerator({data, handleInput}) {

    return data.map(({type, name, label, placeholder, required, options}, index) => {
        switch (type) {
            case 'string':
                return (
                    <TextInput
                        variant="filled"
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        key={index}
                        onChange={(e) => handleInput(name, e.target.value)}
                    />
                )
            case 'number':
                return (
                    <NumberInput
                        key={index}
                        label={label}
                        variant="filled"
                        placeholder={placeholder}
                        hideControls
                        type='tel'
                        onChange={(v) => handleInput(name, v)}
                    />
                )
            case 'select':
                return (
                    <Select
                        key={index}
                        variant="filled"
                        placeholder={placeholder}
                        data={options}
                        onChange={(v) => handleInput(name, v)}
                        clearable
                    />
                )
            case 'autocomplete':
                return (
                    <Autocomplete
                        key={index}
                        variant="filled"
                        placeholder={placeholder}
                        data={options}
                        onChange={(v) => handleInput(name, v)}
                    />
                )
            case 'dateTimePicker':
                return (
                    <DateTimePicker
                        key={index}
                        clearable
                        required={required}
                        variant="filled"
                        placeholder={placeholder}
                        valueFormat="DD MMM YYYY hh:mm A"
                        onChange={(v) => handleInput(name, v)}
                    />
                )
            default:
                return null
        }
    })
}

FormGenerator.propTypes = {
    data: PropTypes.array.isRequired,
    handleInput: PropTypes.func.isRequired
}
