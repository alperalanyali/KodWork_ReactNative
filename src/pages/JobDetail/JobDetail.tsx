import React from 'react';
import {Text,View,ActivityIndicator,Dimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';
import useFetchData from '../../hooks/useFetchData/useFetchData';
import {API_URL} from '../../config';
import styles from './JobDetail-styles'
const JobDetail = ({route})=>{
    const {jobId} = route.params;
    console.log(jobId);
    const api = API_URL+"/"+jobId;
    console.log(api)
    const {data,loading,error} = useFetchData(api,false)
    console.log(data);
    if(loading){
        return(
            <ActivityIndicator color={'red'} size={'large'}/>
        )
    }
    return(
        <View>
            <Text style={styles.title}>{data.name}</Text>

            {
            data.locations.map(location =>{
                return(
                    <Text style={styles.location_title}>Location: <Text style={styles.location_name}>{location.name}</Text></Text>
                )
            })
            }
            {
                data.levels.map(level =>{
                    return(
                        <Text style={styles.location_title}>Level: <Text style={styles.location_name}>{level.name}</Text></Text>
                    )
                })
            }
        <RenderHTML
            baseStyle={styles.html}
            contentWidth={Dimensions.get("window") / 4}
            source={{html:data.contents}}
        />
     
            
        </View>
    )
}

export default JobDetail;