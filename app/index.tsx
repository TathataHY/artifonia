import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [isOnboarding, setIsOnboarding] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkOnboarding = async () => {
      const isOnboarding = await AsyncStorage.getItem("onboarding");
      if (isOnboarding) {
        setIsOnboarding(false);
      }
      setLoading(false);
    };
    checkOnboarding();
  }, []);

  if (loading) return null;

  return (
    <Redirect href={isOnboarding ? "/(routes)/onboarding" : "/(routes)/home"} />
  );
}
