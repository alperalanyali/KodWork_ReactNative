import React  from 'react'
import {Text,View} from 'react-native';
import styles from './FavoriteJobCard-styles';
import CustomButton from '../../CustomButton/CustomButton';
import { addFavorite,removeFavorite } from '../../../context/FavoriteJob/FavoriteSlicer'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../context/store';

const FavoriteJobCard = ({job}) => {
    const favoriteJobs = useSelector((state:RootState) => state.favoriteJobs.favoriteJobs)
    const dispatch = useDispatch();
    const handleRemove = ()=>{
        dispatch(removeFavorite(job.id));
    }
    return (
        <View style={styles.container} key={job.id}>
            <Text style={styles.job_name}>{job.name}</Text>
                
            {
                    job.locations.map((location)=>{
                        return(
                            <View style={styles.location_container}>
                                <Text style={styles.location_name}>{location.name}</Text>
                            </View>
                            
                        )
                    })
            }
            <Text style={styles.category}>{job.levels[0].name}</Text>
            <CustomButton iconName={""} title={"Remove"} onPress={handleRemove}/>
        </View>
    )
}
export default FavoriteJobCard;
