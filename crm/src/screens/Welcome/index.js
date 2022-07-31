import { SafeAreaView, ScrollView } from 'react-native';
import Welcome from '../../features/Welcome';

export default function WelcomeScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <Welcome />
            </ScrollView>
        </SafeAreaView>
    );
}