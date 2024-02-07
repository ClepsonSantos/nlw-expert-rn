import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { CATEGORIES, MENU } from "@/utils/data/products";
import { useState } from "react";
import { FlatList, SectionList, Text, View } from "react-native"

export default function Home() {

    const [category, setCategory] = useState(CATEGORIES[0]);

    function handleCategorySelect(selectedCategory: string){
        setCategory(selectedCategory)
    }

    return (
        <View className="flex-1 pt-8" >
            <Header title="faça seu pedido" cardQuantityItems={5} />

            <FlatList 
                data={CATEGORIES}
                keyExtractor={(item) =>  item}
                renderItem={({item}) => (
                    <CategoryButton 
                        title={item} 
                        onPress={() => handleCategorySelect(item)} 
                        isSelected={category === item}
                    />
                )}
                horizontal
                className="max-h-10 mt-5"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
            />

            <SectionList
                sections={MENU}
                keyExtractor={(item) => item.id}
                stickySectionHeadersEnabled={false}
                renderItem={({ item }) => (
                    <Text className="text-white">{item.title}</Text>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text className="text-xl text-white font-heading mt-8 mb-3">
                        {title}
                    </Text>
                )}
            />
        </View>
    );
}