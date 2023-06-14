import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
    ScrollView,
  Easing,
} from "react-native";
import Animated, {FadeIn} from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { DATA } from "../../db";

const HomeScreen = ({ route, navigation }) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    wrapp: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
      color: colors.text,
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "center",
    },
    inputContainer: {
      marginTop: 20,
      padding: 15,
      backgroundColor: colors.buttonBackground,
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      fontSize: 20,
      fontWeight: "400",
      color: colors.text,
      marginLeft: 8,
    },
    dataText: {
      color: colors.text,
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 10,
    },
    dataTextSecond: {
      color: colors.descriptionText,
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 5,
    },
    view: {
      width: 60,
      height: 40,
      borderRadius: 8,
      backgroundColor: colors.buttonBackground,
    },
    dataView: {
      alignSelf: "center",
      color: colors.text,
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
    },
  });
    


  const navToSetting = () => {
    navigation.navigate("Setting");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapp}>
        <Text style={styles.text}>Home</Text>
        <TouchableOpacity onPress={navToSetting}>
          <Ionicons name="settings-sharp" size={30} color={colors.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={24} color={colors.placeholder} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={colors.placeholder}
          style={styles.input}
        />
      </View>
      <Animated.View entering={FadeIn.delay(500).duration(500)}>
        <Text style={styles.text}>Account</Text>
        {DATA.accounts.map((item) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              padding: 8,
              backgroundColor: colors.card,
              borderRadius: 10,
              marginVertical: 5,
            }}
            key={item.id}
          >
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: item.color,
                borderRadius: 30,
                marginTop: 10,
              }}
            />
            <View style={{ flex: 1, marginLeft: 20, justifyContent: "center" }}>
              <Text style={styles.dataText}>{item.amount}</Text>
              <Text style={styles.dataTextSecond}>
                {item.name + " " + item.number}
              </Text>
            </View>

            <View style={styles.view}>
              <Text style={styles.dataView}>View</Text>
            </View>
          </TouchableOpacity>
        ))}
      </Animated.View>

      <Animated.View
        style={{ flex: 1 }}
        entering={FadeIn.duration(1000).delay(500)}
      >
        <View
          style={{
            marginBottom: 8,
            marginTop: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 24,
              fontWeight: "500",
            }}
          >
            Transaction
          </Text>
          <Text
            style={{
              color: colors.text,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            See All
          </Text>
        </View>

        <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
          {DATA.transactions.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: "row",
                paddingHorizontal: 8,
                paddingVertical: 16,
                backgroundColor: colors.card,
                borderColor: colors.placeholder,
                borderTopLeftRadius: index === 0 ? 8 : 0,
                borderTopRightRadius: index === 0 ? 8 : 0,
                borderBottomLeftRadius:
                  index === DATA.transactions.length - 1 ? 8 : 0,
                borderBottomRightRadius:
                  index === DATA.transactions.length - 1 ? 8 : 0,
                borderBottomWidth:
                  index === DATA.transactions.length - 1 ? 0 : 0.5,
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor:
                    item.type === "INCOME"
                      ? colors.incomeBackground
                      : colors.expenseBackground,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="wallet"
                  size={35}
                  color={
                    item.type === "INCOME" ? colors.income : colors.expense
                  }
                />
              </View>
              <View style={{ flex: 1, justifyContent: "center", margin: 12 }}>
                <Text style={styles.dataTextSecond}>{item.title}</Text>
                <Text style={styles.dataTextSecond}>{item.date}</Text>
              </View>
              <View
                style={{
                  alignSelf: "center",
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  borderRadius: 8,
                  backgroundColor:
                    item.type === "INCOME"
                      ? colors.incomeBackground
                      : colors.expenseBackground,
                }}
              >
                <Text
                  style={{
                    color:
                      item.type === "INCOME" ? colors.income : colors.expense,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  {item.amount}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
