

# TechBlogs



## Usage



## Developing



### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
 ./dbutils
Usage:
        list [-limit <n>] [-activeonly] <Column Family Name>
                -limit <n>       List paginated with a limit of <n>, if <n> is missing, default is 100.
                -activeonly      List exclude inactive object ids.
        query <Column Family Name> <id>
        list <events/stats/audits> <file_prefix> [<YEAR/MONTH/DAY/HOUR>]
        delete [-force] <Column Family Name> <id>
        count [-activeonly] <Column Family Name>
                -activeonly      Count exclude inactive object ids.
        get_records <Events/Stats/AuditLogs> <START TIME> <END TIME>[eg:2012/05/18/15]
        globallock CREATE <lock name> <owner> (<mode>) (<timeout>)
                Note: For <mode>, could be GL_NodeSvcShared_MODE or GL_VdcShared_MODE(default).
                    : For <timeout>, unit is millisecond and 0 (default) means never expired.
        globallock READ <lock name>
        globallock DELETE <lock name>
        dump_schema <schema version> <dump filename>
        dump_secretkey <dump filename>
        restore_secretkey <restore filename>
        recover_vdc_config [-dump] [-recover] Recover Vdc.
        geoblacklist [-reset|set] [<vdc short id>] Geodb blacklist.
        
        
        id: urn:storageos:Volume:0dd9d512-dd63-4440-ab60-ce2d1c680d1f:vdc2
        WWN = 514F0C5090367D38
        allocatedCapacity = 1073741824
        capacity = 1073741824
        creationTime = java.util.GregorianCalendar[time=1424892767178,areFieldsSet=true,areAllFieldsSet=true,lenient=true,zone=sun.util.calendar.ZoneInfo[id="UTC",offset=0,dstSavings=0,useDaylight=false,transitions=0,lastRule=null],firstDayOfWeek=1,minimalDaysInFirstWeek=1,ERA=1,YEAR=2015,MONTH=1,WEEK_OF_YEAR=9,WEEK_OF_MONTH=4,DAY_OF_MONTH=25,DAY_OF_YEAR=56,DAY_OF_WEEK=4,DAY_OF_WEEK_IN_MONTH=4,AM_PM=1,HOUR=7,HOUR_OF_DAY=19,MINUTE=32,SECOND=47,MILLISECOND=178,ZONE_OFFSET=0,DST_OFFSET=0]
        deviceLabel = PnS-Volume-lqujga5h
        inactive = false
        internalFlags = 0
        isComposite = false
        label = PnS-Volume-lqujga5h
        nativeGuid = XTREMIO+APM99990000421+VOLUME+e285fdcd0d3bbcbb7da6cff516d0daa6
        nativeId = e285fdcd0d3bbcbb7da6cff516d0daa6
        opStatus = OpStatusMap {}
        pool = URI: urn:storageos:StoragePool:b65b0fdf-804c-430a-9f55-4954e33522cd:vdc2
        project = urn:storageos:Project:ed8e12f3-e768-4c5a-af06-9a039afc1bde:global:PnS-Volume-lqujga5h
        protocol = StringSet [FC]
        provisionedCapacity = 1073741824
        refreshRequired = false
        storageController = URI: urn:storageos:StorageSystem:715a4cdb-9921-4c04-a5a1-540fad5d6fbc:vdc2
        syncActive = true
        tenant = urn:storageos:TenantOrg:1e5757de-c3cb-4ba9-a512-f43941bad91f:global:PnS-Volume-lqujga5h
        thinVolumePreAllocationSize = 0
        thinlyProvisioned = true
        totalMetaMemberCapacity = 0
        virtualArray = URI: urn:storageos:VirtualArray:b122f6e5-0492-4b5d-8b0d-3d43b53a44c1:vdc2
        virtualPool = URI: urn:storageos:VirtualPool:205a0f89-c098-499c-96f3-c92ddca376ee:vdc2
id: urn:storageos:Volume:0dd7aad5-af6f-481a-8796-ebbb2ca82449:vdc2
        WWN = 514F0C5DC02578E1
        allocatedCapacity = 1073741824
        capacity = 1073741824
        creationTime = java.util.GregorianCalendar[time=1423772653640,areFieldsSet=true,areAllFieldsSet=true,lenient=true,zone=sun.util.calendar.ZoneInfo[id="UTC",offset=0,dstSavings=0,useDaylight=false,transitions=0,lastRule=null],firstDayOfWeek=1,minimalDaysInFirstWeek=1,ERA=1,YEAR=2015,MONTH=1,WEEK_OF_YEAR=7,WEEK_OF_MONTH=2,DAY_OF_MONTH=12,DAY_OF_YEAR=43,DAY_OF_WEEK=5,DAY_OF_WEEK_IN_MONTH=2,AM_PM=1,HOUR=8,HOUR_OF_DAY=20,MINUTE=24,SECOND=13,MILLISECOND=640,ZONE_OFFSET=0,DST_OFFSET=0]
        deviceLabel = PnS-Volume-ot97enof
        inactive = false
        internalFlags = 0
        isComposite = false
        label = PnS-Volume-ot97enof
        nativeGuid = XTREMIO+APM99990000351+VOLUME+6717b00d382e837e2a3c8adc725c5c22
        nativeId = 6717b00d382e837e2a3c8adc725c5c22
        opStatus = OpStatusMap {}
        pool = URI: urn:storageos:StoragePool:c0039406-59ea-439c-aef4-8dab4c4cc350:vdc2
        project = urn:storageos:Project:c3744f46-a9e0-4049-8a0d-97b475980a4a:global:PnS-Volume-ot97enof
        protocol = StringSet [FC]
        provisionedCapacity = 1073741824
        refreshRequired = false
        storageController = URI: urn:storageos:StorageSystem:cdefb247-e9b8-45e2-9bb3-0135ee664f1a:vdc2
        syncActive = true
        tenant = urn:storageos:TenantOrg:c0396ce2-1539-49f0-b307-7e145c65e753:global:PnS-Volume-ot97enof
        thinVolumePreAllocationSize = 0
        thinlyProvisioned = true
        totalMetaMemberCapacity = vipr1:/opt/storageos/bin # id: urn:storageos:Volume:0b3e1ea2-cd01-457e-91b0-a48bd113ec1b:vdc2

