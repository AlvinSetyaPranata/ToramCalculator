import { KeyboardTypeOptions } from "react-native";

export default interface InputPropsType {
    defaultValue? : string,
    readonly?: boolean,
    type?: KeyboardTypeOptions,
    onChangeValue?: (newValue: any) => void
}