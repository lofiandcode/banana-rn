import React from 'react';
import {
	View,
	TextInput,
	StyleProp,
	TextStyle,
} from 'react-native';
import { InputLabel } from '@elements';
import { Colors } from 'react-native-paper';
import * as colors from '@util/colors';
import styles from './FormTextInput.styles';

interface FormTextInputProps {
	text: string;
	placeholder?: string;
	value: any;
	setValue: any;
	width?: number | string;
	autoCapitalize?: 'words' | 'sentences' | 'none' | 'characters';
	inline?: boolean;
	upperCase?: boolean;
	disabled?: boolean;
	style?: StyleProp<TextStyle>;
}

export default ({
	text,
	placeholder,
	value,
	setValue,
	width = '100%',
	autoCapitalize = 'none',
	inline = false,
	upperCase = true,
	disabled = false,
	style,
}: FormTextInputProps) => (
	inline
		? (
			<View style={styles.inlineContainer}>
				<InputLabel text={text} upperCase={upperCase} />
				<View style={{ width: 8 }} />
				<View style={{ width, top: 5 }}>
					<TextInput
						value={value}
						onChangeText={setValue}
						style={[ styles.input, disabled && styles.disabled, style, { textAlign: 'right' } ]}
						autoCapitalize={autoCapitalize}
						editable={!disabled}
						placeholder={placeholder}
						placeholderTextColor={colors.FADED_NAVY_BLUE}
					/>
				</View>
			</View>
		)
		: (
			<View style={{ ...styles.container, width }}>
				<InputLabel text={text} upperCase={upperCase} />
				<TextInput
					value={value}
					onChangeText={setValue}
					style={[ disabled && styles.disabled, styles.input, style ]}
					autoCapitalize={autoCapitalize}
					editable={!disabled}
					placeholder={placeholder}
					placeholderTextColor={colors.FADED_NAVY_BLUE}
				/>
			</View>
		)
);

