import React from 'react';
import {Text,View} from 'react-native';

const JobCard = ({job})=>{
    console.log(job)
    return(
        <View>
            <Text>{job.name}</Text>
        </View>
    )
}

export default JobCard;