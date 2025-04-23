import PropTypes from "prop-types";
import {Anchor, Stack, Text} from "@mantine/core";
import classes from './TextGenerator.module.scss';

const renderImportant = ({important}) => {
    return (
        <Stack>
            <Text>important</Text>
            {important.map((item, index) =>
                <Text key={index} size='12px' pl='1rem'>{item}</Text>
            )}
        </Stack>
    )
}

const renderText = ({text}) => {
    if(Array.isArray(text)) {
        return (
            <Stack
                component='ul'
                p='.2rem 1rem'
            >
                {text.map((item, index) => {
                    return (
                        <Text
                            className={classes.text}
                            component='li'
                            key={index}
                        >{item}</Text>
                    )
                })}
            </Stack>
        )
    } else {
        return <Text className={classes.text} pl='1rem'>{text}</Text>
    }
}

const renderMedia = ({link}) => {
    if(Array.isArray(link)) {
        return (
            <Stack
                component='ul'
                p='.2rem 1rem'
            >
                {link.map(({label, href}, index) => {
                    return (
                        <li key={index} style={{listStyle: 'none'}}>
                            <Anchor
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                size='sm'
                            >
                                {label}
                            </Anchor>
                        </li>
                    )
                })}
            </Stack>
        )
    } else {
        return (
            <Anchor
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                size='sm'
            >
                {link.label}
            </Anchor>
        )
    }
}

export default function TextGenerator({item}) {
    const {header, enunciate, text, link, important} = item;

    return (
        <Stack>
            {important && renderImportant({important})}
            {header && <Text className={classes.header}>{header}</Text>}
            {enunciate && <Text className={classes.enunciate}>{enunciate}</Text>}
            {link && renderMedia({link})}
            {text && renderText({text})}
        </Stack>
    );
}

TextGenerator.propTypes = {
    item: PropTypes.object.isRequired
}

// <Anchor href='https://www.ryl.vegas' target="_blank" rel="noopener noreferrer" size='sm'>
//     RY&L
// </Anchor>