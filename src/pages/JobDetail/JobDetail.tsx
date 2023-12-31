import React from 'react';
import {Text,View,Dimensions,ScrollView,} from 'react-native';
import RenderHTML from 'react-native-render-html';
import styles from './JobDetail-styles'

import { useSelector, useDispatch } from 'react-redux'
import { addFavorite,removeFavorite } from '../../context/FavoriteJob/FavoriteSlicer';
import {RootState} from '../../context/store'
import CustomButton from '../../components/CustomButton/CustomButton';
import {addSubmit} from '../../context/SubmittedJob/submittedjobslice'
const JobDetail = ({navigation,route})=>{
    const favoriteJobs = useSelector((state:RootState) => state.favoriteJobs.favoriteJobs)
    const dispatch = useDispatch();
    const {job} = route.params;
    console.log(job);
    navigation.title = job.name
    const handleSubmit = ()=>{
            dispatch(addSubmit(job))
    }
    console.log(favoriteJobs);    
    const handleFavoriteJob = ()=>{  
       
        if (favoriteJobs.includes(job))
            dispatch(removeFavorite(job.id))
        else
            dispatch(addFavorite(job))
    }
    return(
        <ScrollView>
            <Text style={styles.title}>{job.name}</Text>

            {
            job.locations.map(location =>{
                return(
                    <Text style={styles.location_title}>Location: <Text style={styles.location_name}>{location.name}</Text></Text>
                )
            })
            }
            {
                job.levels.map(level =>{
                    return(
                        <Text style={styles.location_title}>Level: <Text style={styles.location_name}>{level.name}</Text></Text>
                    )
                })
            }
        <RenderHTML
            baseStyle={styles.html}
            contentWidth={Dimensions.get("window") / 4}
            source={{html:job.contents}}
        />
        <View style={styles.row}>    
            <CustomButton iconName="exit-to-app" title="Submit" onPress={handleSubmit}/>
            <CustomButton iconName="heart" title="Favorite Job" onPress={handleFavoriteJob}/>
        </View>
            
        </ScrollView>
    )
}

export default JobDetail;