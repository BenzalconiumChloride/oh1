import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images } from '../constants';
import { Image } from 'react-native';


export default function App() {
    return (
        <SafeAreaView className='bg-primary'>
           <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className='w-full justify-center items-center min-h-[85vh] px-4'>
                    
                    <Image 
                        source={images.ohlogo1}
                        className="w-[180px] h-[180px]"
                        resizeMode="contain"
                    />
                    <Link href='./(auth)/sign-in'>
                        fdghdfgdf
                    </Link>
                </View>
           </ScrollView>
        </SafeAreaView>
    );
}
