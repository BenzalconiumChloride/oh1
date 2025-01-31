import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'

import CustomButton from '../../components/customButton'
import { Link, Stack } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: ' ',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4'>
          <Image 
            source={images.ohlogo1} 
            resizeMode='contain'
            className='w-[340px] h-[205px] items-center justify-center' 
          />

          <Text className="text-white text-semibold font-psemibold text-2xl my-2 justify-center items-center w-full ">
            Sign In
          </Text>

         
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText = {(e) => setForm({ ...form, email: e })}
            otherStyles ="mt-1"
            keyboardType="email-address"

          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText = {(e) => setForm({ ...form, password: e })}
            otherStyles ="mt-7"
          />
          
          <CustomButton 
            title='Sign In'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have an account?
            </Text>

            <Link href='/sign-up' className='text-lg font-psemibold text-secondary'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn