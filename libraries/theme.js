import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles={
    global: props => ({
        body:{
            bg: 'orange.50',
            color: 'gray.800'
        }
    })
}

const components={
    Heading: {
        variants:{
            'section-title': { textDecoration: 'underline', fontSize: 20, textUnderlineOffset: 6, textDecorationColor: 'blue.800',
            textDecorationThickness: 4, marginTop: 3, marginBottom: 4 }
        }
    },
    Link:{
        baseStyle: props => ({
            color: mode('blue.600', 'blue.600')(props), textUnderlineOffset: 3
        })
    }
}

const fonts={
    heading: "'field-gothic-condensed'"
}

const colors={
    glassTeal: '#88ccca'
}

const config={
    initalColorMode: 'light',
    useSystemColorMode: true
}

const theme = extendTheme({
    styles, components, colors, config, fonts
})

export default theme