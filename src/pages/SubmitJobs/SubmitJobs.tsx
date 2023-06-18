import React from 'react';
import {Text,View,FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../context/store';
import JobCard from '../../components/Cards/JobCard/JobCard';
const SubmitJobs = ()=>{
    const submitJobs = useSelector((state:RootState) => state.submittedJobs.submittedJobs)
    const renderItem = ({item}) => <JobCard job={item} handleSelect={null}/>
    if(!submitJobs){
        return(
            <View>
                <Text>You do not have any submitted jobs</Text>
            </View>
        )
    }
    return (
        <FlatList
        data={submitJobs}
        renderItem={renderItem}
        />
    )
}

export default SubmitJobs;