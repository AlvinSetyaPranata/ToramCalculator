import { StyledComponent } from "nativewind";
import { Pressable, Text } from "react-native";
import ButtonProps from "../../types/components/Atoms/Button";

export default function Button(props: ButtonProps): JSX.Element {
    return (
        <StyledComponent className={`bg-blue-500 justify-center items-center py-4 rounded-md ${props.containerClassName}`} component={Pressable} onPress={props.onClick}>
            <StyledComponent onPress={props.onClick} className={`text-white font-semibold ${props.textClassName}`} component={Text}>{props.text}</StyledComponent>
        </StyledComponent>
    )
}