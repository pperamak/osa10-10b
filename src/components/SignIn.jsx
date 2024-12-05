import Text from './Text';
import { useFormik } from 'formik';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import * as yup from 'yup';

const initialValues = {
  userName: '',
  passWord: ''
};

const validationSchema = yup.object().shape({
  userName: yup.string().required('Username is required'),
  passWord: yup.string().required('Password is required')
});


const SignIn = () => {
const onSubmit = (values) => {
  console.log(values);
};

const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit
})

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input,
          formik.touched.userName && formik.errors.userName && styles.inputError
        ]}
        placeholder='Username'
        value={formik.values.userName}
        onChangeText={formik.handleChange('userName')}
        onBlur={formik.handleBlur('userName')}
        />
        {formik.touched.userName && formik.errors.userName && (
          <Text style={styles.errorText}>{formik.errors.userName}</Text>
        )}
      <TextInput
        style={[styles.input,
          formik.touched.passWord && formik.errors.passWord && styles.inputError
        ]}
        secureTextEntry={true}
        placeholder='Password'
        value={formik.values.passWord}
        onChangeText={formik.handleChange('passWord')}
        onBlur={formik.handleBlur('passWord')}
        />
        {formik.touched.passWord && formik.errors.passWord && (
          <Text style={styles.errorText}>{formik.errors.passWord}</Text>
        )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  inputError: {
    borderColor: '#d73a4a', 
  },
  errorText: {
    color: '#d73a4a',
    fontSize: 12,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#4267B2', 
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SignIn;