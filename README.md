vipr1:/opt/storageos/bin # ./dbutils query Volume urn:storageos:Volume:0dd7aad5-af6f-481a-8796-ebbb2ca82449:vdc2
Initializing db client ...
Initializing column family map ...
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
        totalMetaMemberCapacity = 0
        virtualArray = URI: urn:storageos:VirtualArray:b755d367-e05e-45c5-9b66-c6ef64801729:vdc2
        virtualPool = URI: urn:storageos:VirtualPool:ea43f3a4-452d-4dc6-a020-f3c7b002b18c:vdc2

vipr1:/opt/storageos/bin # ./dbutils count Volume
Initializing db client ...
Initializing column family map ...
Column Family Volume's row count is: 202654

