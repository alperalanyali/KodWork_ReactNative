import React from 'react';
import {Text,View,SafeAreaView,FlatList} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../context/store';
import FavoriteJobCard from '../../components/Cards/FavoriteJobCard/FavoriteJobCard';
const FavoriteJobs = ()=>{
    const favoriteJobs = useSelector((state:RootState) => state.favoriteJobs.favoriteJobs)
    const renderItem = ({item}) => <FavoriteJobCard job={item}/>
    return(
        <SafeAreaView>
            <FlatList
                data={favoriteJobs}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default FavoriteJobs;