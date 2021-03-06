app.controller('Set_timeController', ['$scope', '$http', '$state', '$rootScope', '$filter', function ($scope, $http, $state, $rootScope, $filter) {
    // 初始化
    $scope.init = function () {
        $scope.datas = [
            'Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa',
            'Africa/Asmara', 'Africa/Bamako', 'Africa/Bangui', 'Africa/Banjul',
            'Africa/Bissau', 'Africa/Blantyre', 'Africa/Brazzaville', 'Africa/Bujumbura',
            'Africa/Cairo', 'Africa/Casablanca', 'Africa/Maputo', 'Africa/Maseru',
            'Africa/Dakar', 'Africa/Dar_es_Salaam', 'Africa/Djibouti', 'Africa/Douala',
            'Africa/El_Aaiun', 'Africa/Freetown', 'Africa/Gaborone', 'Africa/Harare',
            'Africa/Johannesburg', 'Africa/Juba', 'Africa/Kampala', 'Africa/Khartoum',
            'Africa/Kigali', 'Africa/Kinshasa', 'Africa/Lagos', 'Africa/Libreville',
            'Africa/Lome', 'Africa/Luanda', 'Africa/Algiers', 'Africa/Lusaka', 'Africa/Ceuta',
            'Africa/Malabo', 'Africa/Mbabane', 'Africa/Conakry', 'Africa/Lubumbashi',
            'Africa/Mogadishu', 'Africa/Monrovia', 'Africa/Nairobi', 'Africa/Ndjamena',
            'Africa/Niamey', 'Africa/Nouakchott', 'Africa/Ouagadougou', 'Africa/Porto-Novo',
            'Africa/Sao_Tome', 'Africa/Tripoli', 'Africa/Tunis', 'Africa/Windhoek',
            //美洲
            'America/Adak', 'America/Anchorage', 'America/Anguilla', 'America/Antigua',
            'America/Araguaina', 'America/Argentina/Buenos_Aires', 'America/Argentina/Catamarca',
            'America/Argentina/Jujuy', 'America/Argentina/La_Rioja', 'America/Argentina/Mendoza',
            'America/Argentina/Salta', 'America/Belem', 'America/Bahia', 'America/Bahia_Banderas',
            'America/Argentina/Ushuaia', 'America/Aruba', 'America/Asuncion', 'America/Atikokan',
            'America/Argentina/San_Juan', 'America/Barbados', 'America/Argentina/San_Luis',
            'America/Belize', 'America/Blanc-Sablon', 'America/Boa_Vista', 'America/Bogota',
            'America/Boise', 'America/Cambridge_Bay', 'America/Campo_Grande', 'America/Cancun',
            'America/Caracas', 'America/Cayenne', 'America/Cayman', 'America/Chicago',
            'America/Chihuahua', 'America/Costa_Rica', 'America/Creston', 'America/Cuiaba',
            'America/Curacao', 'America/Danmarkshavn', 'America/Dawson', 'America/Dawson_Creek',
            'America/Denver', 'America/Detroit', 'America/Dominica', 'America/Edmonton',
            'America/Eirunepe', 'America/El_Salvador', 'America/Fort_Nelson', 'America/Fortaleza',
            'America/Glace_Bay', 'America/Godthab', 'America/Goose_Bay', 'America/Grand_Turk',
            'America/Grenada', 'America/Guadeloupe', 'America/Guatemala', 'America/Guayaquil',
            'America/Guyana', 'America/Halifax', 'America/Havana', 'America/Hermosillo',
            'America/Indiana/Indianapolis', 'America/Indiana/Knox', 'America/Indiana/Marengo',
            'America/Indiana/Tell_City', 'America/Indiana/Vevay', 'America/Indiana/Vincennes',
            'America/Inuvik', 'America/Iqaluit', 'America/Jamaica', 'America/Argentina/Cordoba',
            'America/Kentucky/Louisville', 'America/Kentucky/Monticello', 'America/Kralendijk',
            'America/Lima', 'America/Los_Angeles', 'America/Lower_Princes', 'America/Maceio',
            'America/Managua', 'America/Manaus', 'America/Marigot', 'America/Martinique',
            'America/Matamoros', 'America/Mazatlan', 'America/Menominee', 'America/Merida',
            'America/Metlakatla', 'America/Mexico_City', 'America/Miquelon', 'America/Moncton',
            'America/Monterrey', 'America/Montevideo', 'America/Montserrat', 'America/Nassau',
            'America/New_York', 'America/Nipigon', 'America/Nome', 'America/Noronha', 'America/La_Paz',
            'America/North_Dakota/Beulah', 'America/North_Dakota/Center', 'America/Tegucigalpa',
            'America/North_Dakota/New_Salem	America/Ojinaga', 'America/Panama', 'America/Porto_Velho',
            'America/Pangnirtung', 'America/Paramaribo', 'America/Phoenix', 'America/Indiana/Winamac',
            'America/Port-au-Prince', 'America/Port_of_Spain', 'America/Argentina/Tucuman',
            'America/Puerto_Rico', 'America/Punta_Arenas', 'America/Rainy_River', 'America/Juneau',
            'America/Rankin_Inlet', 'America/Recife', 'America/Regina', 'America/Resolute',
            'America/Rio_Branco', 'America/Santarem', 'America/Sitka', 'America/St_Barthelemy',
            'America/St_Johns', 'America/St_Kitts', 'America/St_Lucia', 'America/St_Thomas',
            'America/St_Vincent', 'America/Swift_Current', 'America/Indiana/Petersburg',
            'America/Thule', 'America/Thunder_Bay', 'America/Tijuana', 'America/Whitehorse',
            'America/Toronto', 'America/Tortola', 'America/Vancouver', 'America/Yellowknife',
            'America/Winnipeg', 'America/Yakutat', 'America/Argentina/Rio_Gallegos',
            //南极洲
            'Antarctica/Syowa', 'Antarctica/Troll', 'Antarctica/Vostok', 'Antarctica/Macquarie',
            'Antarctica/Mawson', 'Antarctica/McMurdo', 'Antarctica/Palmer', 'Antarctica/Rothera',
            'Antarctica/Casey', 'Antarctica/Davis', 'Antarctica/DumontDUrville',
            // 北极
            'Arctic/Longyearbyen',
            // 亚洲
            'Asia/Aden', 'Asia/Almaty', 'Asia/Amman', 'Asia/Anadyr', 'Asia/Dushanbe', 'Asia/Dili',
            'Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Ashgabat', 'Asia/Atyrau', 'Asia/Krasnoyarsk',
            'Asia/Baghdad', 'Asia/Bahrain', 'Asia/Baku', 'Asia/Bangkok', 'Asia/Dhaka',
            'Asia/Barnaul', 'Asia/Beirut', 'Asia/Bishkek', 'Asia/Brunei', 'Asia/Kuwait',
            'Asia/Chita', 'Asia/Choibalsan', 'Asia/Colombo', 'Asia/Damascus', 'Asia/Dubai',
            'Asia/Famagusta', 'Asia/Gaza', 'Asia/Hebron', 'Asia/Ho_Chi_Minh', 'Asia/Kuching',
            'Asia/Hong_Kong', 'Asia/Hovd', 'Asia/Irkutsk', 'Asia/Jakarta', 'Asia/Kuala_Lumpur',
            'Asia/Jayapura', 'Asia/Jerusalem', 'Asia/Kabul', 'Asia/Kamchatka', 'Asia/Manila',
            'Asia/Karachi', 'Asia/Kathmandu', 'Asia/Khandyga', 'Asia/Kolkata', 'Asia/Makassar',
            'Asia/Macau', 'Asia/Magadan', 'Asia/Novosibirsk', 'Asia/Novokuznetsk', 'Asia/Tokyo',
            'Asia/Muscat', 'Asia/Nicosia', 'Asia/Pontianak', 'Asia/Thimphu', 'Asia/Ust-Nera',
            'Asia/Omsk', 'Asia/Oral', 'Asia/Phnom_Penh', 'Asia/Ulaanbaatar', 'Asia/Urumqi',
            'Asia/Pyongyang', 'Asia/Qatar', 'Asia/Qyzylorda', 'Asia/Riyadh', 'Asia/Tehran',
            'Asia/Sakhalin', 'Asia/Samarkand', 'Asia/Seoul', 'Asia/Shanghai', 'Asia/Tbilisi',
            'Asia/Singapore', 'Asia/Srednekolymsk', 'Asia/Taipei', 'Asia/Tashkent',
            'Asia/Vientiane', 'Asia/Vladivostok', 'Asia/Yakutsk', 'Asia/Yangon',
            'Asia/Yekaterinburg', 'Asia/Yerevan', 'Asia/Tomsk',

            // 大西洋
            'Atlantic/Azores', 'Atlantic/Bermuda', 'Atlantic/Canary', 'Atlantic/Cape_Verde',
            'Atlantic/Faroe', 'Atlantic/Madeira', 'Atlantic/Reykjavik', 'Atlantic/South_Georgia',
            'Atlantic/St_Helena', 'Atlantic/Stanley',
            // 澳洲
            'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Broken_Hill', 'Australia/Currie',
            'Australia/Darwin', 'Australia/Eucla', 'Australia/Hobart', 'Australia/Lindeman',
            'Australia/Lord_Howe', 'Australia/Melbourne', 'Australia/Perth', 'Australia/Sydney',
            // 欧洲
            'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Astrakhan', 'Europe/Athens',
            'Europe/Belgrade', 'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels',
            'Europe/Bucharest', 'Europe/Budapest', 'Europe/Busingen', 'Europe/Chisinau',
            'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Gibraltar', 'Europe/Guernsey',
            'Europe/Helsinki', 'Europe/Isle_of_Man', 'Europe/Istanbul', 'Europe/Jersey',
            'Europe/Kaliningrad', 'Europe/Kiev', 'Europe/Kirov', 'Europe/Lisbon',
            'Europe/Ljubljana', 'Europe/London', 'Europe/Luxembourg', 'Europe/Madrid',
            'Europe/Malta', 'Europe/Mariehamn', 'Europe/Minsk', 'Europe/Monaco',
            'Europe/Moscow', 'Europe/Oslo', 'Europe/Paris', 'Europe/Podgorica',
            'Europe/Prague', 'Europe/Riga', 'Europe/Rome', 'Europe/Samara',
            'Europe/San_Marino', 'Europe/Sarajevo', 'Europe/Saratov', 'Europe/Simferopol',
            'Europe/Skopje', 'Europe/Sofia', 'Europe/Stockholm', 'Europe/Tallinn',
            'Europe/Tirane', 'Europe/Ulyanovsk', 'Europe/Uzhgorod', 'Europe/Vaduz',
            'Europe/Vatican', 'Europe/Vienna', 'Europe/Vilnius', 'Europe/Volgograd',
            'Europe/Warsaw', 'Europe/Zagreb', 'Europe/Zaporozhye', 'Europe/Zurich',
            // 印度
            'Indian/Antananarivo', 'Indian/Chagos', 'Indian/Christmas', 'Indian/Cocos',
            'Indian/Comoro', 'Indian/Kerguelen', 'Indian/Mahe,Indian/Maldives',
            'Indian/Mauritius', 'Indian/Mayotte', 'Indian/Reunion',
            // 太平洋
            'Pacific/Apia', 'Pacific/Auckland', 'Pacific/Bougainville', 'Pacific/Chatham',
            'Pacific/Chuuk', 'Pacific/Easter', 'Pacific/Efate', 'Pacific/Enderbury',
            'Pacific/Fakaofo', 'Pacific/Fiji', 'Pacific/Funafuti', 'Pacific/Galapagos',
            'Pacific/Gambier', 'Pacific/Guadalcanal', 'Pacific/Guam', 'Pacific/Honolulu',
            'Pacific/Kiritimati', 'Pacific/Kosrae', 'Pacific/Kwajalein', 'Pacific/Majuro',
            'Pacific/Marquesas', 'Pacific/Midway', 'Pacific/Nauru', 'Pacific/Niue',
            'Pacific/Norfolk', 'Pacific/Noumea', 'Pacific/Pago_Pago', 'Pacific/Palau',
            'Pacific/Pitcairn', 'Pacific/Pohnpei', 'Pacific/Port_Moresby', 'Pacific/Rarotonga',
            'Pacific/Saipan', 'Pacific/Tahiti', 'Pacific/Tarawa', 'Pacific/Tongatapu',
            'Pacific/Wake', 'Pacific/Wallis',
            // 其他
            'Africa/Asmera', 'Africa/Timbuktu', 'America/Argentina/ComodRivadavia', 'America/Atka',
            'America/Buenos_Aires', 'America/Catamarca', 'America/Coral_Harbour', 'America/Cordoba',
            'America/Ensenada', 'America/Fort_Wayne', 'America/Indianapolis', 'America/Jujuy',
            'America/Knox_IN', 'America/Louisville', 'America/Mendoza', 'America/Montreal',
            'America/Porto_Acre', 'America/Rosario', 'America/Santa_Isabel', 'America/Shiprock',
            'America/Virgin', 'Antarctica/South_Pole', 'Asia/Ashkhabad', 'Asia/Calcutta',
            'Asia/Chongqing', 'Asia/Chungking', 'Asia/Dacca', 'Asia/Harbin', 'Canada/Mountain',
            'Asia/Istanbul', 'Asia/Kashgar', 'Asia/Katmandu', 'Asia/Macao', 'Canada/Newfoundland',
            'Asia/Rangoon', 'Asia/Saigon', 'Asia/Tel_Aviv', 'Asia/Thimbu', 'Canada/Yukon',
            'Asia/Ujung_Pandang', 'Asia/Ulan_Bator', 'Atlantic/Faeroe', 'Atlantic/Jan_Mayen',
            'Canada/Central', 'Canada/Eastern', 'Egypt', 'Canada/Pacific', 'Canada/Saskatchewan',
            'Chile/Continental', 'Chile/EasterIsland', 'CST6CDT', 'Cuba', 'EET', 'Eire', 'EST',
            'EST5EDT', 'Etc/GMT', 'Etc/GMT+0', 'Etc/GMT+1', 'Etc/GMT+10', 'Etc/GMT+11', 'CET',
            'Etc/GMT+12', 'Etc/GMT+2', 'Etc/GMT+3', 'Etc/GMT+4', 'Etc/GMT+5', 'Etc/GMT+6',
            'Etc/GMT+7', 'Etc/GMT+8', 'Etc/GMT+9', 'Etc/GMT-0', 'Etc/GMT-1', 'Etc/GMT-10',
            'Etc/GMT-11', 'Etc/GMT-12', 'Etc/GMT-13', 'Etc/GMT-14', 'Etc/GMT-2', 'Etc/GMT-3',
            'Etc/GMT-4', 'Etc/GMT-5', 'Etc/GMT-6', 'Etc/GMT-7', 'Etc/GMT-8', 'Etc/GMT-9',
            'Etc/GMT0', 'Etc/Greenwich', 'Etc/UCT', 'Etc/Universal', 'Etc/UTC', 'Etc/Zulu',
            'Europe/Belfast', 'Europe/Nicosia', 'Europe/Tiraspol', 'Factory', 'GB', 'GB-Eire',
            'GMT', 'GMT+0', 'GMT-0', 'GMT0', 'Greenwich', 'Hongkong', 'HST', 'Iceland', 'Iran',
            'Israel', 'Jamaica', 'Japan', 'Kwajalein', 'Libya', 'MET', 'Mexico/BajaNorte',
            'Mexico/BajaSur', 'Mexico/General', 'MST', 'MST7MDT', 'Navajo', 'NZ', 'Singapore',
            'NZ-CHAT', 'Pacific/Johnston', 'Pacific/Ponape', 'Pacific/Samoa', 'ROC', 'ROK',
            'Pacific/Truk', 'Pacific/Yap', 'Poland', 'Portugal', 'Turkey', 'UCT', 'Universal',
            'US/Alaska', 'US/Aleutian', 'US/Arizona', 'US/Central', 'PRC', 'PST8PDT',
            'US/East-Indiana', 'US/Eastern', 'US/Hawaii', 'US/Indiana-Starke',
            'US/Michigan', 'US/Mountain', 'US/Pacific', 'US/Pacific-New',
            'US/Samoa', 'UTC	W-SU', 'WET', 'Zulu'
        ]; //下拉框选项
        $scope.datatype = [{
                name: '手动配置',
                value: 'hand'
            },
            {
                name: '自动同步本地系统时间',
                value: 'local'
            },
            {
                name: 'NTP服务器时间同步',
                value: 'ntp'
            },
        ];
        $scope.selectedName = 'hand';
        // $scope.datapicker();
        $scope.select_time_zone_list = []
        $scope.time_zone_if = false;
        $scope.time_zone = 'Asia/Shanghai';
        $scope.choose_if = {
            time: true,
            zone: true,
            ntp: true,
        }
        $scope.setting = {
            time: '',
            zone: 'Asia/Shanghai',
            ntp: '',
        }
        $scope.allow_ip_list = [{
            name: "",
            icon: true
        }];
        $scope.get_seting();
        $scope.get_allow_ip();
    };
    // 时间插件
    $scope.datapicker = function (choosetime) {
        $('#reservationtime').daterangepicker({
                startDate: choosetime,
                singleDatePicker: true,
                // showDropdowns: true, //当设置值为true的时候，允许年份和月份通过下拉框的形式选择
                // autoApply: false, // true不用点击Apply或者应用按钮就可以直接取得选中的日期
                timePicker: true,
                timePicker24Hour: true,
                timePickerSeconds: true,
                locale: {
                    applyLabel: '确定',
                    cancelLabel: '取消',
                    format: 'YYYY-MM-DD HH:mm:ss',
                },
            },
            function (start, end, label) {
                $scope.setting.time = $filter('date')(
                    start.unix() * 1000,
                    'yyyy-MM-dd HH:mm:ss'
                );
                console.log($scope.setting.time);
            }
        );
    };
    // 选择配置方式
    $scope.typeChange = function () {
        switch ($scope.selectedName) {
            case 'hand':
                $scope.choose_if.time = false;
                $scope.choose_if.zone = false;
                $scope.choose_if.ntp = true;
                break;
            case 'local':
                $scope.choose_if.time = true;
                $scope.choose_if.zone = false;
                $scope.choose_if.ntp = true;
                break;
            case 'ntp':
                $scope.choose_if.time = true;
                $scope.choose_if.zone = true;
                $scope.choose_if.ntp = false;
                break;
            default:
                break;
        }
    }
    // 获取可登录IP
    $scope.get_allow_ip = function () {
        $http({
            method: 'get',
            url: './yiiapi/seting/get-allow-ip'
        }).then(function successCallback(data) {
            $scope.allow_ip_list = [];
            if (data.data.data.length == 0) {
                $scope.allow_ip_list = [{
                    name: "",
                    icon: true
                }];
                return false
            }
            angular.forEach(data.data.data, function (item, index) {
                var obj = {
                    name: item,
                    icon: false
                };
                if (index == data.data.data.length - 1) {
                    obj.icon = true;
                }
                $scope.allow_ip_list.push(obj);
            })
        }, function errorCallback(data) {});
    }
    $scope.del_input = function (index) {
        $scope.allow_ip_list.splice(index, 1);
    };
    $scope.add_input = function (index) {
        var obj = {
            name: "",
            icon: true
        };
        $scope.allow_ip_list.push(obj);
        $scope.allow_ip_list[index].icon = false;
    };
    // 修改可登录ip
    $scope.set_allow_ip = function () {
        $scope.set_allow_ip_list = [];
        var loading = zeroModal.loading(4);
        angular.forEach($scope.allow_ip_list, function (item) {
            if (item.name != "") {
                $scope.set_allow_ip_list.push(item.name);
            }
        });
        $http({
            method: 'put',
            url: './yiiapi/seting/set-allow-ip',
            data: {
                ip: $scope.set_allow_ip_list
            }
        }).then(function successCallback(data) {
            console.log(data);
            zeroModal.close(loading);
            if (data.data.status == 0) {
                zeroModal.success('保存成功！');
                $scope.get_allow_ip();
            }
        }, function errorCallback(data) {});
    }
    // 获取ntp配置
    $scope.get_seting = function () {
        $http({
            method: 'get',
            url: './yiiapi/seting/time-synchronization'
        }).then(function successCallback(data) {
            $scope.setting_data = data.data.data.data[0]
            console.log($scope.setting_data);
            switch ($scope.setting_data.type) {
                case 1:
                    $scope.selectedName = 'hand';
                    $scope.choose_if.time = false;
                    $scope.choose_if.zone = false;
                    $scope.choose_if.ntp = true;
                    break;
                case 2:
                    $scope.selectedName = 'local';
                    $scope.choose_if.time = true;
                    $scope.choose_if.zone = false;
                    $scope.choose_if.ntp = true;
                    break;
                case 3:
                    $scope.selectedName = 'ntp';
                    $scope.choose_if.time = true;
                    $scope.choose_if.zone = true;
                    $scope.choose_if.ntp = false;
                    break;
                default:
                    $scope.selectedName = 'hand';
                    $scope.choose_if.time = false;
                    $scope.choose_if.zone = false;
                    $scope.choose_if.ntp = true;
                    break;
            }
            $scope.setting = {
                time: $scope.setting_data.time,
                zone: $scope.setting_data.zone,
                ntp: $scope.setting_data.server,
            }

            $scope.datapicker($scope.setting_data.time);
        }, function errorCallback(data) {});
    }
    // 保存配置
    $scope.set_save = function () {
        switch ($scope.selectedName) {
            case 'hand':
                var loading = zeroModal.loading(4);
                $http({
                    method: 'put',
                    url: './yiiapi/seting/manual-time-synchronization',
                    data: {
                        time: $scope.setting.time,
                        zone: $scope.setting.zone
                    }
                }).then(function successCallback(data) {
                    zeroModal.close(loading);
                    console.log(data);
                    if (data.data.status == 0) {
                        zeroModal.success('保存成功！');
                    }
                }, function errorCallback(data) {});
                break;
            case 'local':
                var loading = zeroModal.loading(4);
                $http({
                    method: 'put',
                    url: './yiiapi/seting/local-time-synchronization',
                    data: {
                        zone: $scope.setting.zone
                    }
                }).then(function successCallback(data) {
                    zeroModal.close(loading);
                    console.log(data);
                }, function errorCallback(data) {});
                break;
            case 'ntp':
                var loading = zeroModal.loading(4);
                $http({
                    method: 'put',
                    url: './yiiapi/seting/ntp-time-synchronization',
                    data: {
                        server: $scope.setting.ntp,
                    }
                }).then(function successCallback(data) {
                    zeroModal.close(loading);
                    console.log(data);
                }, function errorCallback(data) {});
                break;
            default:
                break;
        }
    }

    $scope.init();
}]);