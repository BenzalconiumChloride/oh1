import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import { Link } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import CustomButton from '../../components/customButton';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    contact: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'Select a country',
    password: '',
    confirmPassword: '', // New state for confirming password
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    if (form.password !== form.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    console.log('Submitting form...');
    Alert.alert('Form Submitted', JSON.stringify(form));
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4">

          <View className="mt-4 flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm">
            <Text className="text-white font-bold text-lg">SIGN UP</Text>
            
            {/* Form Fields */}
            <View className="mt-4">
              <Text className="text-white">Full Name</Text>
              <FormField
                placeholder="Your name"
                value={form.name}
                handleChangeText={(e) => setForm({ ...form, name: e })}
                otherStyles="mt-1"
              />
            </View>

            <View className="mt-4">
              <Text className="text-white">Contact Number</Text>
              <FormField
                placeholder="Phone Number"
                value={form.contact}
                handleChangeText={(e) => setForm({ ...form, contact: e })}
                keyboardType="number-pad"
                textContentType="telephoneNumber"
                maxLength={13}
                otherStyles="mt-1"
              />
            </View>

            <View className="mt-4">
              <Text className="text-white">Email</Text>
              <FormField
                placeholder="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-1"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoComplete="email"
              />
            </View>

            <View className="mt-4">
              <Text className="text-white">Address</Text>
              <FormField
                placeholder="Your address"
                value={form.address}
                handleChangeText={(e) => setForm({ ...form, address: e })}
                multiline
                otherStyles="mt-1"
              />
            </View>

            <View className="mt-4 flex flex-row space-x-2 ">
              <View className="flex-1 mr-1">
                <Text className="text-white">City</Text>
                <FormField
                  placeholder="Your city"
                  value={form.city}
                  handleChangeText={(e) => setForm({ ...form, city: e })}
                  otherStyles="mt-1"
                />
              </View>
              <View className="flex-1 ml-1">
                <Text className="text-white">Province</Text>
                <FormField
                  placeholder="Your state"
                  value={form.state}
                  handleChangeText={(e) => setForm({ ...form, state: e })}
                  otherStyles="mt-1"
                />
              </View>
            </View>

            <View className="flex-1">
              <Text className="text-white">ZIP</Text>
              <FormField
                placeholder="Your ZIP code"
                value={form.zip}
                handleChangeText={(e) => setForm({ ...form, zip: e })}
                otherStyles="mt-1"
              />
            </View>

            <View className="flex-1">
              <Text className="text-white">Role</Text>
              <Picker
                selectedValue={form.country}
                onValueChange={(value) => setForm({ ...form, country: value })}
                style={{
                  height: 50,
                  width: '100%',
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 8,
                  marginVertical: 10,
                  paddingHorizontal: 10,
                  backgroundColor: '#212020',
                  color: 'white',
                }}
              >
                <Picker.Item label="Service Provider" value="Service Provider" />
                <Picker.Item label="Independent" value="Independent" />
                <Picker.Item label="Company" value="Company" />
                <Picker.Item label="NA" value="NA" />
              </Picker>
            </View>
            
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
            />

            <FormField
              title="Confirm Password" // Updated title
              value={form.confirmPassword} // Use confirmPassword state
              handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
              otherStyles="mt-7"
            />

           s
          </View>

          <CustomButton
            title="Sign Up" // Update button title to "Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
