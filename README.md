

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
