let reqSql = "";

function iterMap(mapping, key, data) {
    for(let j in mapping){
        if(key == j && data!=""){
            reqSql+= " UNION ALL SELECT " + "'" + j +"' as par, " + mapping[j].name + " AS name FROM " + mapping[j].dict + " WHERE " + mapping[j].id + "=" + data
            break;
        }
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
                (typeof(data[i]) !="object") ?  iterMap(mapping, i, data[i]) : whotIsIt(data[i], mapping)
            }
            break;
        default:
            break;
    }

}

function sex(data, mapping) {
    whotIsIt(data, mapping)
    console.log(reqSql.slice(10))
}






let z = {
    "data": [
        {
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
            "r_improve_heating_id": "99",
            "r_improve_electricity_id": "99",
            "r_improve_electric_stove_id": "99",
            "r_improve_gas_id": "99",
            "r_improve_garbage_id": "99",
            "r_garbage_another": "",
            "r_period_id": "99",
            "r_composition_id": "99",
            "r_composition_another": "",
            "r_households_count": "1",
            "households": [
                {
                    "h_id": "15773668634886267",
                    "h_name": "111",
                    "h_room_id": "15773668547377930",
                    "h_household_number": 1,
                    "h_household_member_count": 1,
                    "h_household_rooms": null,
                    "h_household_room_parts": false,
                    "h_ownership_id": "99",
                    "h_improve_internet_id": "99",
                    "h_temp_residents": false,
                    "members": [
                        {
                            "is_first": true,
                            "edit": false,
                            "m_indicators": "",
                            "progress": 2,
                            "m_id": "1577366874620",
                            "m_h_id": "15773668634886267",
                            "m_spouse_id": null,
                            "m_sib_id": "1",
                            "m_gender_id": "1",
                            "m_name": "11111",
                            "m_parent_id": null,
                            "m_children": [],
                            "m_birth_day": "7",
                            "m_birth_month": "6",
                            "m_birth_year": "2008",
                            "m_age": 11,
                            "m_bith_forgot": false,
                            "m_temp": "99",
                            "m_absence_reason": "",
                            "m_absence_period": "",
                            "m_absence_less_month": false,
                            "m_birth_place": "999",
                            "m_citizenship_original": "999",
                            "m_citizenship_another": "",
                            "m_national_id_original": "999",
                            "m_national_another": "",
                            "m_national_refusal": false,
                            "m_marriage_id": "99",
                            "m_number_children_born": "",
                            "m_education_id_original": "99",
                            "m_education_id_add": "",
                            "m_get_education": "99",
                            "m_inst_id": "99",
                            "m_another_education_type": "",
                            "m_child_preschool": "99",
                            "m_language_id": "999",
                            "m_language_another": "",
                            "m_speak_ukrainian": "99",
                            "m_speak_other_languages": [
                                "999"
                            ],
                            "m_sign_language": false,
                            "m_livelihood_sources": [
                                "99"
                            ],
                            "m_another_livelihood_sources": "",
                            "m_revenue_id": "99",
                            "m_have_week_paid_work": "99",
                            "m_employ_id": "99",
                            "m_another_employment": "",
                            "m_native_job_location": "99",
                            "m_job_region": "999",
                            "m_job_settlement": "",
                            "m_main_job_location_another_country": "999",
                            "m_remotework_id": "99",
                            "m_remotework_another": "",
                            "m_joblocation_id": "99",
                            "m_last_month_looking_job": "99",
                            "m_ready_job_two_weeks": "99",
                            "m_dontwork_id": "99",
                            "m_refuse_job_reason_another": "",
                            "m_live_birth_continuously": "99",
                            "m_armed_conflict": "99",
                            "m_live_birth_continuously_month": "",
                            "m_live_birth_continuously_year": "",
                            "m_left_region": "999",
                            "m_left_settlement": "",
                            "m_left_another_country": "999",
                            "m_live_settlement_year": "",
                            "m_arrival_month": "",
                            "m_previous_residence_region": "999",
                            "m_previous_residence_type": "99",
                            "m_is_lived_another_country": "99",
                            "m_lived_another_country": "999",
                            "m_lived_another_country_year": "",
                            "m_reason_another_country": "99",
                            "m_reason_another_country_another": "",
                            "m_planning_leave_place": "99",
                            "m_planmigration_reason_id": "99",
                            "m_planmigration_reason_another": "",
                            "m_place_coincide": "99",
                            "m_registration_id": "99",
                            "m_registration_another": "",
                            "m_national_id": "999"
                        }
                    ],
                    "current_member": null,
                    "edit": true,
                    "h_error_class": "warning",
                    "h_indicators": "",
                    "": ""
                }
            ],
            "current_tab": "1",
            "current_household": 1,
            "first_time": false,
            "r_hs_id": "1",
            "r_datasource": 2,
            "r_member_count": 1,
            "r_terson_id_distr": 29689,
            "r_indicators": "",
            "r_percent_filling": 28,
            "r_status_id": 7,
            "": "",
            "h_household1_member_count": "1"
        }
    ],
    "ok": true
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
    },
    m_temp: {
        dict: 'temp_absent',
        id: 'temp_absent_id',
        name: 'temp_absent_name_ua'
    },
    m_birth_place: {
        dict: 'regions',
        id: 'region_id',
        name: 'region_name_ua'
    },
    m_citizenship_original: {
        dict: 'regions',
        id: 'region_id',
        name: 'region_name_ua'
    },
    m_national_id_original: {
        dict: 'nationality',
        id: 'national_id',
        name: 'national_name_ua'
    },
    m_marriage_id: {
        dict: 'marriage',
        id: 'marriage_id',
        name: 'marriage_name_ua'
    },
    m_education_id_original: {
        dict: 'education',
        id: 'education_id',
        name: 'education_name_ua'
    },
    m_get_education: {
        dict: 'responses',
        id: 'response_id',
        name: 'response_name_ua'
    },
    m_language_id: {
        dict: 'languages',
        id: 'language_id',
        name: 'language_name_ua'
    },
    m_revenue_id: {
        dict: 'revenue',
        id: 'revenue_id',
        name: 'revenue_name_ua'
    },
    m_have_week_paid_work: {
        dict: 'responses',
        id: 'response_id',
        name: 'response_name_ua'
    },
    m_native_job_location: {
        dict: 'responses',
        id: 'response_id',
        name: 'response_name_ua'
    },
    m_employ_id: {
        dict: 'employments',
        id: 'employ_id',
        name: 'employ_name_ua'
    },
    m_last_month_looking_job: {
        dict: 'responses',
        id: 'response_id',
        name: 'response_name_ua'
    },
    m_live_birth_continuously: {
        dict: 'responses',
        id: 'response_id',
        name: 'response_name_ua'
    },
    m_is_lived_another_country: {
        dict: 'responses',
        id: 'response_id',
        name: 'response_name_ua'
    },
    m_planning_leave_place: {
        dict: 'responses',
        id: 'response_id',
        name: 'response_name_ua'
    },
    m_place_coincide: {
        dict: 'responses',
        id: 'response_id',
        name: 'response_name_ua'
    },
    m_inst_id: {
        dict: 'institutions',
        id: 'inst_id',
        name: 'inst_name_ua'
    },
    m_child_preschool: {
        dict: 'responses',
        id: 'response_id',
        name: 'response_name_ua'
    },
    m_language_id: {
        dict: 'languages',
        id: 'language_id',
        name: 'language_name_ua'
    },
    m_speak_other_languages: {
        dict: 'languages',
        id: 'language_id',
        name: 'language_name_ua'
    },

    m_job_region: {
        dict: 'regions',
        id: 'region_id',
        name: 'region_name_ua'
    },
    m_job_settlement: {
        dict: 'terson',
        id: 'terson_id',
        name: 'terson_name_ua'
    },
    m_main_job_location_another_country: {
        dict: 'regions',
        id: 'region_id',
        name: 'region_name_ua'
    },
    m_ready_job_two_weeks: {
        dict: 'responses',
        id: 'response_id',
        name: 'response_name_ua'
    },
    m_left_region: {
        dict: 'regions',
        id: 'region_id',
        name: 'region_name_ua'
    },
    m_left_settlement: {
        dict: 'terson',
        id: 'terson_id',
        name: 'terson_name_ua'
    },
    m_left_another_country: {
        dict: 'regions',
        id: 'region_id',
        name: 'region_name_ua'
    },
    m_lived_another_country: {
        dict: 'regions',
        id: 'region_id',
        name: 'region_name_ua'
    },
    m_reason_another_country: {
        dict: 'migration',
        id: 'migration_id',
        name: 'migration_name_ua'
    },
    m_planmigration_reason_id: {
        dict: 'migration',
        id: 'migration_id',
        name: 'migration_name_ua'
    },
    m_livelihood_sources: {
        dict: 'revenue',
        id: 'revenue_id',
        name: 'revenue_name_ua'
    }
};
// whotIsIt(z, mapping)

