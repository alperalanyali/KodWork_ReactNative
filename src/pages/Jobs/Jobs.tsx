import React from 'react';
import { Text,View,SafeAreaView,FlatList,ActivityIndicator, Alert } from 'react-native';
import useFetchData from '../../hooks/useFetchData/useFetchData'
import { API_URL } from '../../config';
import JobCard from '../../components/Cards/JobCard/JobCard';
const Jobs = ()=>{
    const {error,loading,data} = useFetchData(API_URL+"?page=1");
    
    const renderJob = ({item}) => {<JobCard job={item}/>}
    console.log(data);
    if(error){
        return(
            <Text>{error}</Text>
        )
    }    
    return(
        <SafeAreaView>
            {
                loading ? <ActivityIndicator color={"red"} size="large"/> 
                :                  
                <FlatList
                data={data}
                renderItem={renderJob}
                
            />
            }
           
        </SafeAreaView>
    )
}

export default Jobs