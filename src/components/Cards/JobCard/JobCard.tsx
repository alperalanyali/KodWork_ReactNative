import React from 'react';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import styles from './JobCard-styles'
const JobCard = ({job,handleSelect})=>{
    
    return(

        <TouchableWithoutFeedback onPress={handleSelect} key={job.id}>
            <View style={styles.container} key={job.id}>
                <Text>{job.name}</Text>
                
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
            </View>
        </TouchableWithoutFeedback>
    )
}

export default JobCard;