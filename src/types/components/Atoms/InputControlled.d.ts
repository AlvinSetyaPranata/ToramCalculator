import { KeyboardTypeOptions } from "react-native";

export default interface InputPropsType {
    defaultValue? : string,
    readonly?: boolean,
    type?: KeyboardTypeOptions,
    setter?: React.Dispatch<React.SetStateAction<string>>,
    value?: string,
    onChangeHandler?: () => void
    
}