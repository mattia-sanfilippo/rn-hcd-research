import { Controller, useForm } from "react-hook-form";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { z } from "zod";
import {zodResolver} from '@hookform/resolvers/zod';

/*
* Forms can be validated using external libraries like react-hook-form, as there isn't any ready to use API for React Native.
*/

const schema = z.object({
    email: z.string().email("Invalid email address"),
  });
  

const FormErrorsScreen = () => {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
      });

    const onSubmit = () => {
        console.log('Valid');
    };

    
      return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    placeholder="Email"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    />
                )}
                name="email"
            />
          {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },
    errorText: {
        color: "red",
    },
});

export default FormErrorsScreen;