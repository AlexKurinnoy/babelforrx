let reqSql = "";
//
function f(mapping, key, data) {
    for(let j in mapping){
        (key == j) ? reqSql+= "UNION ALL SELECT " + "'" + j +"' as par, " + mapping[j].name + " AS name FROM " + mapping[j].dict + " WHERE " + mapping[j].id + "=" + data;
    }
}

function whotIsIt(data, mapping) {
    switch (true) {
        case (Object.prototype.toString.call(data) == '[object Array]'):
            data.forEach((el)=>{
                whotIsIt(el, mapping)
            })
            break;
        case (Object.prototype.toString.call(data) != '[object Array]' && typeof(data) =="object"):
                for (let i in data) {
                    (typeof(data[i]) !="object") ?  f(mapping, i, data[i]) : whotIsIt(data[i], mapping)
                }
            break;
        default:
            console.log("ok")
    }

} ;








let z = {
    "r_id": "15773668547377930",
    "r_start_time": 1577366854739,
    "r_finish_time": 1577366878997,
    "r_task_id": "1",
    "r_region_id": 80,
    "r_terson_id": 29684,
    "r_street_id": 4,
    "r_house_number_id": 4,
    "r_flat_number": "1",
    "r_flat_without_number": false,
    "r_building_id": "2",
    "r_rolling_stock": "",
    "r_build_type_another": "",
    "r_total_area": "1111",
    "r_improve_water_id": "99",
    "r_improve_toilet_id": "99",
    "r_toilet_other_households": "99",
    "r_improve_bath_id": "99",
    "r_improve_bathhouse_id": "99",
    "r_improve_hotwater_id": "99",
    "r_improve_sewage_id": "99",
    "r_improve_kitchen_id": "99",
    "r_improve_heating_id": "99"
};
  let mapping = {
    r_region_id:{
        dict:"regions",
        id:"region_id",
        name:"region_name_ua"
    },
    r_street_id:{
        dict:"streets",
        id:"street_id",
        name:"street_name_ua",
        subname:"street_type_ua"
    },
    r_building_id:{
        dict:"buildings",
        id:"building_id",
        name:"building_name_ua"
    },
    r_house_number_id:{
        dict:"houses",
        id:"house_id",
        name:"house_number",
        subname:"house_numbereradd"
    },
    r_improve_water_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },
    r_toilet_other_households:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },

    r_improve_toilet_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },
    r_improve_bath_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },
    r_improve_bathhouse_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },
    r_improve_hotwater_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },
    r_improve_sewage_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },
    r_improve_kitchen_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },
    r_improve_heating_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },
    r_improve_electricity_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },
    r_improve_electric_stove_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },
    r_improve_gas_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },
    r_improve_garbage_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    },
    r_period_id:{
        dict:"periods",
        id:"period_id",
        name:"period_name_ua"
    },
    r_composition_id:{
        dict:"composition",
        id:"composition_id",
        name:"composition_name_ua"
    },
    h_ownership_id:{
        dict:"ownership",
        id:"ownership_id",
        name:"ownership_name_ua"
    },
    h_improve_internet_id:{
        dict:"improvements",
        id:"improve_id",
        name:"improve_name_ua"
    }
};
whotIsIt(z, mapping)
