import React from "react";
import { View, Text } from "react-native";
import styles from "../src/styles/AboutScreenStyle";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.aboutContainer}>
                <Text style={styles.aboutTitle}>Meu App React Native</Text>
                <Text style={styles.aboutText}>Versão do App: 1.0.0</Text>
                <Text style={styles.aboutText}>Desenvolvido por Raydson Silva, durante a aula de PDM</Text>
            </View>
        </View>

    );
}