/**
 * Created by WangWeimin on 2017/8/25.
 */


Page({
    data: {
        loading: false,
        timetable: [
            {min: 418, max: 455, data: ['7:20', '7:25', '7:25', '7:35', '7:05', '7:00', '06:58']},
            {min: 450, max: 500, data: ['8:00', '8:05', '8:10', '8:20', '7:35', '7:30', '7:28']},
            {min: 510, max: 530, data: ['8:30', '8:35', '8:40', '8:50', '8:45', '8:40', '8:38']},
            {min: 555, max: 580, data: ['9:10', '9:15', '9:20', '9:30', '9:40', '9:32', '9:30']},
            {min: 605, max: 630, data: ['10:00', '10:05', '10:10', '10:20', '10:30', '', '']},
            {min: 660, max: 690, data: ['11:00', '11:05', '11:10', '11:20', '11:30', '', '']},
            {min: 720, max: 755, data: ['12:00', '12:05', '12:10', '12:20', '12:35', '', '']},
            {min: 770, max: 790, data: ['12:50', '12:55', '13:00', '13:10', '13:10', '13:02', '13:00']},
            {min: 830, max: 850, data: ['13:50', '13:55', '14:00', '14:10', '14:00', '', '']},
            {min: 880, max: 905, data: ['14:45', '14:50', '14:55', '15:05', '14:40', '', '']},
            {min: 910, max: 950, data: ['15:30', '15:35', '15:40', '15:50', '15:20', '15:12', '15:10']},
            {min: 960, max: 1000, data: ['16:20', '16:25', '16:30', '16:40', '16:00', '', '']},
            {min: 1010, max: 1040, data: ['17:00', '17:05', '17:10', '17:20', '16:50', '', '']},
            {min: 1040, max: 1090, data: ['17:50', '17:55', '18:00', '18:10', '17:20', '', '']},
            {min: 1075, max: 1120, data: ['18:20', '18:25', '18:30', '18:40', '18:05', '17:57', '17:55']},
            {min: 1160, max: 1190, data: ['19:30', '19:35', '19:40', '19:50', '19:30', '19:22', '19:20']},
            {min: 1220, max: 1250, data: ['20:30', '20:35', '20:40', '20:50', '20:20', '', '']},
            {min: 1260, max: 1295, data: ['21:15', '21:20', '21:25', '21:35', '21:00', '', '']},
            {min: 1310, max: 1330, data: ['21:50', '21:55', '22:00', '22:10', '21:50', '', '']}
        ],
        msg: [
            '1、本时刻更新于2018年3月19日,时刻表将根据交通实际情况进行调整。',
            '2、8:30、10:00、12:00、15:30、17:50、18:20、21:15从老校区到虎溪校区的班次增加停靠虎溪花园北、南站、理科大楼。',
            '3、16:50、17:20二个班次到老校区的班车提前5分钟到二食堂门口配载，准点到车站发车。',
            '4、12:35和17:20两班从虎溪校区到老校区的班车，分别于12:25、17:05从理科楼始发。',
            '5、19:20从虎溪花园到老校区班车不经过第二学生食堂，经过理科楼， 19:25可在理科楼上车前往老校区。',
            '6、从虎溪花园始发到老校区班次从虎溪花园北站发车，经停虎溪校区车站，6:58, 7:28班次周日及节假日不开。',
            '7、周末及人流量大时在保证表中所列班次的情况下，老校区到虎溪校区在A区大门7:30-21:50，虎溪校区到老校区在停车场8:30-21:50的时间范围内实行滚动发车，坐满即发车。',
            '8、举行活动车辆需求量大，乘坐早上第一班车提前1天与车队联系，乘坐晚上最后一班车提前4小时与车队联系，联系电话为15803050901；包车电话：唐老师15803050868。',
            '9、每个班次始发车夏天提前15分钟，冬天提前10分钟到位等候。',
            '10、交通车监督电话：65674773，13983079918（管委会）,15803050901（车队）\n A区站务：15803050840，15803050841 \n B区站务：15803050871, 15803050849 \n' +
            'C区站务：15803050842, 15803050904 \n 虎溪校区站务：15803050846，15803050847'
        ]
    },
    onLoad: function () {
        var _this = this;
        var d = new Date();
        var now_minutes = d.getHours() * 60 + d.getMinutes();
        // console.log('now minute',now_minutes);
        var active;
        if (now_minutes<_this.data.timetable[0].max)
            active = 0;
        for(var i=1;i<_this.data.timetable.length;i++){
            if(now_minutes>=_this.data.timetable[i-1].max && now_minutes<_this.data.timetable[i].max)
                active = i;
        }
        var data = {};
        if(active)
            data['timetable['+active+'].active'] = true;
        _this.setData(data);
    }
});
