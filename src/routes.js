import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Search from "./screens/Search";
import musicDetails from "./screens/musicDetails";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Details" component={musicDetails}/>
        </Stack.Navigator>
    );
}

function MainTabScreen(){
    return(
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "lightgray",
            tabBarStyle: {backgroundColor: "#212121"},
        }}
        >
            <Tab.Screen name="HomeStack" component={HomeStackScreen} 
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons 
                        name="home-variant" 
                        size={36} 
                        color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen name="Search" component={Search}
            options={{
                title: "Pesquisar",
                tabBarIcon: ({ color }) => (
                    <MaterialIcons 
                    name="search" 
                    size={36} 
                    color={color}
                    />
                ),
            }}
            />
        </Tab.Navigator>
    );
}

export default function Routes(){
    return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainTab" component={MainTabScreen}/>
    </Stack.Navigator>
    )
}