import React from 'react';
import { Text,View,SafeAreaView,FlatList,ActivityIndicator, Alert } from 'react-native';
import useFetchData from '../../hooks/useFetchData/useFetchData'
import { API_URL } from '../../config';
import JobCard from '../../components/Cards/JobCard/JobCard';
const Jobs = ({navigation})=>{
    const {error,loading,data} = useFetchData(API_URL+"?page=1",true);
    const handleSelect = (id) => {
        navigation.navigate("JobDetailScreen",{jobId:id})
    }

    const renderJob = ({item}) => <JobCard job={item} handleSelect={()=>handleSelect(item.id)}/>
    if(error){
        return(
            <Text>{error}</Text>
        )
    }    

    if(loading){
        <ActivityIndicator color="red" size="large"/>
    }
    return(
        <SafeAreaView>            
            <FlatList
                
                data={data}
                renderItem={renderJob}
            />
           
        </SafeAreaView>
    )
}

export default Jobs