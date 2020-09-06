const events = `
2020/09/05 22:24:03: Start Autorun M31
2020/09/05 22:24:03: Shooting picture 1#
2020/09/05 22:25:03: Download
2020/09/05 22:25:04: Dither
2020/09/05 22:25:04: Settle
2020/09/05 22:26:04: Settle Failed
2020/09/05 22:26:04: Shooting picture 2#
2020/09/05 22:27:05: Download
2020/09/05 22:27:05: Dither
2020/09/05 22:27:05: Settle
2020/09/05 22:28:06: Settle Failed
2020/09/05 22:28:06: Shooting picture 3#
2020/09/05 22:29:07: Download
2020/09/05 22:29:07: Dither
2020/09/05 22:29:07: Settle
2020/09/05 22:29:14: Shooting picture 4#
2020/09/05 22:30:15: Download
2020/09/05 22:30:15: Dither
2020/09/05 22:30:15: Settle
2020/09/05 22:30:40: Shooting picture 5#
2020/09/05 22:31:41: Download
2020/09/05 22:31:41: Dither
2020/09/05 22:31:41: Settle
2020/09/05 22:31:48: Shooting picture 6#
2020/09/05 22:32:49: Download
2020/09/05 22:32:49: Dither
2020/09/05 22:32:49: Settle
2020/09/05 22:32:56: Shooting picture 7#
2020/09/05 22:33:57: Download
2020/09/05 22:33:57: Dither
2020/09/05 22:33:57: Settle
2020/09/05 22:34:04: Shooting picture 8#
2020/09/05 22:35:05: Download
2020/09/05 22:35:05: Dither
2020/09/05 22:35:05: Settle
2020/09/05 22:35:44: Shooting picture 9#
2020/09/05 22:36:45: Download
2020/09/05 22:36:45: Dither
2020/09/05 22:36:45: Settle
2020/09/05 22:37:06: Shooting picture 10#
2020/09/05 22:38:07: Download
2020/09/05 22:38:07: Dither
2020/09/05 22:38:07: Settle
2020/09/05 22:38:16: Shooting picture 11#
2020/09/05 22:39:17: Download
2020/09/05 22:39:17: Dither
2020/09/05 22:39:17: Settle
2020/09/05 22:40:18: Shooting picture 12#
2020/09/05 22:41:19: Download
2020/09/05 22:41:19: Dither
2020/09/05 22:41:19: Settle
2020/09/05 22:41:30: Shooting picture 13#
2020/09/05 22:42:31: Download
2020/09/05 22:42:31: Dither
2020/09/05 22:42:31: Settle
2020/09/05 22:43:10: Shooting picture 14#
2020/09/05 22:44:11: Download
2020/09/05 22:44:11: Dither
2020/09/05 22:44:11: Settle
2020/09/05 22:44:20: Shooting picture 15#
2020/09/05 22:45:21: Download
2020/09/05 22:45:21: Dither
2020/09/05 22:45:21: Settle
2020/09/05 22:45:36: Shooting picture 16#
2020/09/05 22:46:37: Download
2020/09/05 22:46:37: Dither
2020/09/05 22:46:37: Settle
2020/09/05 22:46:46: Shooting picture 17#
2020/09/05 22:47:47: Download
2020/09/05 22:47:47: Dither
2020/09/05 22:47:47: Settle
2020/09/05 22:48:48: Settle Failed
2020/09/05 22:48:48: Shooting picture 18#
2020/09/05 22:49:49: Download
2020/09/05 22:49:49: Dither
2020/09/05 22:49:49: Settle
2020/09/05 22:50:14: Shooting picture 19#
2020/09/05 22:51:15: Download
2020/09/05 22:51:15: Dither
2020/09/05 22:51:15: Settle
2020/09/05 22:51:38: Shooting picture 20#
2020/09/05 22:52:39: Download
2020/09/05 22:52:39: Dither
2020/09/05 22:52:39: Settle
2020/09/05 22:52:46: Shooting picture 21#
2020/09/05 22:53:47: Download
2020/09/05 22:53:47: Dither
2020/09/05 22:53:47: Settle
2020/09/05 22:53:54: Shooting picture 22#
2020/09/05 22:54:55: Download
2020/09/05 22:54:55: Dither
2020/09/05 22:54:55: Settle
2020/09/05 22:55:10: Shooting picture 23#
2020/09/05 22:56:11: Download
2020/09/05 22:56:11: Dither
2020/09/05 22:56:11: Settle
2020/09/05 22:56:34: Shooting picture 24#
2020/09/05 22:57:35: Download
2020/09/05 22:57:35: Dither
2020/09/05 22:57:35: Settle
2020/09/05 22:57:42: Shooting picture 25#
2020/09/05 22:58:43: Download
2020/09/05 22:58:43: Dither
2020/09/05 22:58:43: Settle
2020/09/05 22:59:04: Shooting picture 26#
2020/09/05 23:00:05: Download
2020/09/05 23:00:05: Dither
2020/09/05 23:00:05: Settle
2020/09/05 23:00:24: Shooting picture 27#
2020/09/05 23:01:25: Download
2020/09/05 23:01:25: Dither
2020/09/05 23:01:25: Settle
2020/09/05 23:02:26: Settle Failed
2020/09/05 23:02:26: Shooting picture 28#
2020/09/05 23:03:27: Download
2020/09/05 23:03:27: Dither
2020/09/05 23:03:27: Settle
2020/09/05 23:04:10: Shooting picture 29#
2020/09/05 23:05:11: Download
2020/09/05 23:05:11: Dither
2020/09/05 23:05:11: Settle
2020/09/05 23:05:56: Shooting picture 30#
2020/09/05 23:06:57: Download
2020/09/05 23:06:57: Dither
2020/09/05 23:06:57: Settle
2020/09/05 23:08:57: Settle Failed
2020/09/05 23:08:57: Shooting picture 31#
2020/09/05 23:09:57: Download
2020/09/05 23:09:57: Dither
2020/09/05 23:09:57: Settle
2020/09/05 23:10:44: Shooting picture 32#
2020/09/05 23:11:45: Download
2020/09/05 23:11:45: Dither
2020/09/05 23:11:45: Settle
2020/09/05 23:12:02: Shooting picture 33#
2020/09/05 23:13:03: Download
2020/09/05 23:13:03: Dither
2020/09/05 23:13:03: Settle
2020/09/05 23:13:44: Shooting picture 34#
2020/09/05 23:14:45: Download
2020/09/05 23:14:45: Dither
2020/09/05 23:14:45: Settle
2020/09/05 23:14:52: Shooting picture 35#
2020/09/05 23:15:53: Download
2020/09/05 23:15:53: Dither
2020/09/05 23:15:53: Settle
2020/09/05 23:16:54: Settle Failed
2020/09/05 23:16:54: Shooting picture 36#
2020/09/05 23:17:55: Download
2020/09/05 23:17:55: Dither
2020/09/05 23:17:55: Settle
2020/09/05 23:18:02: Shooting picture 37#
2020/09/05 23:19:03: Download
2020/09/05 23:19:03: Dither
2020/09/05 23:19:03: Settle
2020/09/05 23:19:28: Shooting picture 38#
2020/09/05 23:20:29: Download
2020/09/05 23:20:29: Dither
2020/09/05 23:20:29: Settle
2020/09/05 23:21:30: Settle Failed
2020/09/05 23:21:30: Shooting picture 39#
2020/09/05 23:22:31: Download
2020/09/05 23:22:31: Dither
2020/09/05 23:22:31: Settle
2020/09/05 23:23:02: Shooting picture 40#
2020/09/05 23:24:03: Download
2020/09/05 23:24:03: Dither
2020/09/05 23:24:03: Settle
2020/09/05 23:24:10: Shooting picture 41#
2020/09/05 23:25:11: Download
2020/09/05 23:25:11: Dither
2020/09/05 23:25:11: Settle
2020/09/05 23:26:12: Settle Failed
2020/09/05 23:26:12: Shooting picture 42#
2020/09/05 23:27:13: Download
2020/09/05 23:27:13: Dither
2020/09/05 23:27:13: Settle
2020/09/05 23:27:20: Shooting picture 43#
2020/09/05 23:28:21: Download
2020/09/05 23:28:21: Dither
2020/09/05 23:28:21: Settle
2020/09/05 23:28:42: Shooting picture 44#
2020/09/05 23:29:43: Download
2020/09/05 23:29:43: Dither
2020/09/05 23:29:43: Settle
2020/09/05 23:30:22: Shooting picture 45#
2020/09/05 23:31:23: Download
2020/09/05 23:31:23: Dither
2020/09/05 23:31:23: Settle
2020/09/05 23:31:52: Shooting picture 46#
2020/09/05 23:32:53: Download
2020/09/05 23:32:53: Dither
2020/09/05 23:32:53: Settle
2020/09/05 23:33:00: Shooting picture 47#
2020/09/05 23:34:01: Download
2020/09/05 23:34:01: Dither
2020/09/05 23:34:01: Settle
2020/09/05 23:34:18: Shooting picture 48#
2020/09/05 23:35:19: Download
2020/09/05 23:35:19: Dither
2020/09/05 23:35:19: Settle
2020/09/05 23:36:02: Shooting picture 49#
2020/09/05 23:37:03: Download
2020/09/05 23:37:03: Dither
2020/09/05 23:37:03: Settle
2020/09/05 23:37:32: Shooting picture 50#
2020/09/05 23:38:33: Download
2020/09/05 23:38:33: Dither
2020/09/05 23:38:33: Settle
2020/09/05 23:38:48: Shooting picture 51#
2020/09/05 23:39:49: Download
2020/09/05 23:39:49: Dither
2020/09/05 23:39:49: Settle
2020/09/05 23:40:50: Settle Failed
2020/09/05 23:40:50: Shooting picture 52#
2020/09/05 23:41:51: Download
2020/09/05 23:41:51: Dither
2020/09/05 23:41:51: Settle
2020/09/05 23:42:00: Shooting picture 53#
2020/09/05 23:43:01: Download
2020/09/05 23:43:01: Dither
2020/09/05 23:43:01: Settle
2020/09/05 23:43:16: Shooting picture 54#
2020/09/05 23:44:17: Download
2020/09/05 23:44:17: Dither
2020/09/05 23:44:17: Settle
2020/09/05 23:44:24: Shooting picture 55#
2020/09/05 23:45:25: Download
2020/09/05 23:45:25: Dither
2020/09/05 23:45:25: Settle
2020/09/05 23:46:26: Settle Failed
2020/09/05 23:46:26: Shooting picture 56#
2020/09/05 23:47:27: Download
2020/09/05 23:47:27: Dither
2020/09/05 23:47:27: Settle
2020/09/05 23:47:34: Shooting picture 57#
2020/09/05 23:48:35: Download
2020/09/05 23:48:35: Dither
2020/09/05 23:48:35: Settle
2020/09/05 23:49:36: Settle Failed
2020/09/05 23:49:36: Shooting picture 58#
2020/09/05 23:50:37: Download
2020/09/05 23:50:37: Dither
2020/09/05 23:50:37: Settle
2020/09/05 23:51:02: Shooting picture 59#
2020/09/05 23:52:03: Download
2020/09/05 23:52:03: Dither
2020/09/05 23:52:03: Settle
2020/09/05 23:52:20: Shooting picture 60#
2020/09/05 23:53:21: Download
2020/09/05 23:53:21: Dither
2020/09/05 23:53:21: Settle
2020/09/05 23:53:28: Shooting picture 61#
2020/09/05 23:54:29: Download
2020/09/05 23:54:29: Dither
2020/09/05 23:54:29: Settle
2020/09/05 23:55:24: Shooting picture 62#
2020/09/05 23:56:25: Download
2020/09/05 23:56:25: Dither
2020/09/05 23:56:25: Settle
2020/09/05 23:56:40: Shooting picture 63#
2020/09/05 23:57:41: Download
2020/09/05 23:57:41: Dither
2020/09/05 23:57:41: Settle
2020/09/05 23:58:42: Settle Failed
2020/09/05 23:58:42: Shooting picture 64#
2020/09/05 23:59:43: Download
2020/09/05 23:59:43: Dither
2020/09/05 23:59:43: Settle
2020/09/06 00:00:01: Shooting picture 65#
2020/09/06 00:01:01: Download
2020/09/06 00:01:02: Dither
2020/09/06 00:01:02: Settle
2020/09/06 00:01:08: Shooting picture 66#
2020/09/06 00:02:09: Download
2020/09/06 00:02:09: Dither
2020/09/06 00:02:09: Settle
2020/09/06 00:02:16: Shooting picture 67#
2020/09/06 00:03:17: Download
2020/09/06 00:03:17: Dither
2020/09/06 00:03:17: Settle
2020/09/06 00:03:24: Shooting picture 68#
2020/09/06 00:04:25: Download
2020/09/06 00:04:25: Dither
2020/09/06 00:04:25: Settle
2020/09/06 00:04:54: Shooting picture 69#
2020/09/06 00:05:55: Download
2020/09/06 00:05:55: Dither
2020/09/06 00:05:55: Settle
2020/09/06 00:06:04: Shooting picture 70#
2020/09/06 00:07:05: Download
2020/09/06 00:07:05: Dither
2020/09/06 00:07:05: Settle
2020/09/06 00:07:26: Shooting picture 71#
2020/09/06 00:08:27: Download
2020/09/06 00:08:27: Dither
2020/09/06 00:08:27: Settle
2020/09/06 00:08:48: Shooting picture 72#
2020/09/06 00:09:49: Download
2020/09/06 00:09:49: Dither
2020/09/06 00:09:49: Settle
2020/09/06 00:10:50: Settle Failed
2020/09/06 00:10:50: Shooting picture 73#
2020/09/06 00:11:51: Download
2020/09/06 00:11:51: Dither
2020/09/06 00:11:51: Settle
2020/09/06 00:12:30: Shooting picture 74#
2020/09/06 00:13:31: Download
2020/09/06 00:13:31: Dither
2020/09/06 00:13:31: Settle
2020/09/06 00:13:42: Shooting picture 75#
2020/09/06 00:14:43: Download
2020/09/06 00:14:43: Dither
2020/09/06 00:14:43: Settle
2020/09/06 00:15:00: Shooting picture 76#
2020/09/06 00:16:01: Download
2020/09/06 00:16:01: Dither
2020/09/06 00:16:01: Settle
2020/09/06 00:17:02: Settle Failed
2020/09/06 00:17:02: Shooting picture 77#
2020/09/06 00:18:03: Download
2020/09/06 00:18:03: Dither
2020/09/06 00:18:03: Settle
2020/09/06 00:18:24: Shooting picture 78#
2020/09/06 00:19:25: Download
2020/09/06 00:19:25: Dither
2020/09/06 00:19:25: Settle
2020/09/06 00:19:32: Shooting picture 79#
2020/09/06 00:20:33: Download
2020/09/06 00:20:33: Dither
2020/09/06 00:20:33: Settle
2020/09/06 00:20:56: Shooting picture 80#
2020/09/06 00:21:57: Download
2020/09/06 00:21:57: Dither
2020/09/06 00:21:57: Settle
2020/09/06 00:22:46: Shooting picture 81#
2020/09/06 00:23:47: Download
2020/09/06 00:23:47: Dither
2020/09/06 00:23:47: Settle
2020/09/06 00:23:54: Shooting picture 82#
2020/09/06 00:24:55: Download
2020/09/06 00:24:55: Dither
2020/09/06 00:24:55: Settle
2020/09/06 00:25:16: Shooting picture 83#
2020/09/06 00:26:17: Download
2020/09/06 00:26:17: Dither
2020/09/06 00:26:17: Settle
2020/09/06 00:26:34: Shooting picture 84#
2020/09/06 00:27:35: Download
2020/09/06 00:27:35: Dither
2020/09/06 00:27:35: Settle
2020/09/06 00:28:36: Settle Failed
2020/09/06 00:28:36: Shooting picture 85#
2020/09/06 00:29:37: Download
2020/09/06 00:29:37: Dither
2020/09/06 00:29:37: Settle
2020/09/06 00:30:30: Shooting picture 86#
2020/09/06 00:31:31: Download
2020/09/06 00:31:31: Dither
2020/09/06 00:31:31: Settle
2020/09/06 00:32:30: Shooting picture 87#
2020/09/06 00:33:31: Download
2020/09/06 00:33:31: Dither
2020/09/06 00:33:31: Settle
2020/09/06 00:33:50: Shooting picture 88#
2020/09/06 00:34:51: Download
2020/09/06 00:34:51: Dither
2020/09/06 00:34:51: Settle
2020/09/06 00:34:58: Shooting picture 89#
2020/09/06 00:35:59: Download
2020/09/06 00:35:59: Dither
2020/09/06 00:35:59: Settle
2020/09/06 00:36:06: Shooting picture 90#
2020/09/06 00:37:07: Download
2020/09/06 00:37:07: Dither
2020/09/06 00:37:07: Settle
2020/09/06 00:37:48: Shooting picture 91#
2020/09/06 00:38:49: Download
2020/09/06 00:38:49: Dither
2020/09/06 00:38:49: Settle
2020/09/06 00:40:49: Settle Failed
2020/09/06 00:40:49: Shooting picture 92#
2020/09/06 00:41:50: Download
2020/09/06 00:41:50: Dither
2020/09/06 00:41:50: Settle
2020/09/06 00:42:50: Settle Failed
2020/09/06 00:42:50: Shooting picture 93#
2020/09/06 00:43:51: Download
2020/09/06 00:43:51: Dither
2020/09/06 00:43:51: Settle
2020/09/06 00:44:52: Settle Failed
2020/09/06 00:44:52: Shooting picture 94#
2020/09/06 00:45:53: Download
2020/09/06 00:45:53: Dither
2020/09/06 00:45:53: Settle
2020/09/06 00:46:54: Settle Failed
2020/09/06 00:46:54: Shooting picture 95#
2020/09/06 00:47:55: Download
2020/09/06 00:47:55: Dither
2020/09/06 00:47:55: Settle
2020/09/06 00:48:56: Settle Failed
2020/09/06 00:48:56: Shooting picture 96#
2020/09/06 00:49:57: Download
2020/09/06 00:49:57: Dither
2020/09/06 00:49:57: Settle
2020/09/06 00:50:04: Shooting picture 97#
2020/09/06 00:51:05: Download
2020/09/06 00:51:05: Dither
2020/09/06 00:51:05: Settle
2020/09/06 00:52:06: Settle Failed
2020/09/06 00:52:06: Shooting picture 98#
2020/09/06 00:53:07: Download
2020/09/06 00:53:07: Dither
2020/09/06 00:53:07: Settle
2020/09/06 00:53:14: Shooting picture 99#
2020/09/06 00:54:15: Download
2020/09/06 00:54:15: Dither
2020/09/06 00:54:15: Settle
2020/09/06 00:55:16: Settle Failed
2020/09/06 00:55:16: Shooting picture 100#
2020/09/06 00:56:17: Download
2020/09/06 00:56:17: Dither
2020/09/06 00:56:17: Settle
2020/09/06 00:57:08: Shooting picture 101#
2020/09/06 00:58:09: Download
2020/09/06 00:58:09: Dither
2020/09/06 00:58:09: Settle
2020/09/06 00:58:46: Shooting picture 102#
2020/09/06 00:59:47: Download
2020/09/06 00:59:47: Dither
2020/09/06 00:59:47: Settle
2020/09/06 00:59:54: Shooting picture 103#
2020/09/06 01:00:55: Download
2020/09/06 01:00:55: Dither
2020/09/06 01:00:55: Settle
2020/09/06 01:01:36: Shooting picture 104#
2020/09/06 01:02:37: Download
2020/09/06 01:02:37: Dither
2020/09/06 01:02:37: Settle
2020/09/06 01:03:38: Settle Failed
2020/09/06 01:03:38: Shooting picture 105#
2020/09/06 01:04:39: Download
2020/09/06 01:04:39: Dither
2020/09/06 01:04:39: Settle
2020/09/06 01:05:40: Settle Failed
2020/09/06 01:05:40: Shooting picture 106#
2020/09/06 01:06:41: Download
2020/09/06 01:06:41: Dither
2020/09/06 01:06:41: Settle
2020/09/06 01:07:20: Shooting picture 107#
2020/09/06 01:08:21: Download
2020/09/06 01:08:21: Dither
2020/09/06 01:08:21: Settle
2020/09/06 01:09:10: Shooting picture 108#
2020/09/06 01:10:11: Download
2020/09/06 01:10:11: Dither
2020/09/06 01:10:11: Settle
2020/09/06 01:10:40: Shooting picture 109#
2020/09/06 01:11:41: Download
2020/09/06 01:11:41: Dither
2020/09/06 01:11:41: Settle
2020/09/06 01:11:48: Shooting picture 110#
2020/09/06 01:12:49: Download
2020/09/06 01:12:49: Dither
2020/09/06 01:12:49: Settle
2020/09/06 01:12:56: Shooting picture 111#
2020/09/06 01:13:57: Download
2020/09/06 01:13:57: Dither
2020/09/06 01:13:57: Settle
2020/09/06 01:14:28: Shooting picture 112#
2020/09/06 01:15:29: Download
2020/09/06 01:15:29: Dither
2020/09/06 01:15:29: Settle
2020/09/06 01:16:20: Shooting picture 113#
2020/09/06 01:17:21: Download
2020/09/06 01:17:21: Dither
2020/09/06 01:17:21: Settle
2020/09/06 01:17:36: Shooting picture 114#
2020/09/06 01:18:37: Download
2020/09/06 01:18:37: Dither
2020/09/06 01:18:37: Settle
2020/09/06 01:19:38: Settle Failed
2020/09/06 01:19:38: Shooting picture 115#
2020/09/06 01:20:39: Download
2020/09/06 01:20:39: Dither
2020/09/06 01:20:39: Settle
2020/09/06 01:21:40: Settle Failed
2020/09/06 01:21:40: Shooting picture 116#
2020/09/06 01:22:41: Download
2020/09/06 01:22:41: Dither
2020/09/06 01:22:41: Settle
2020/09/06 01:23:10: Shooting picture 117#
2020/09/06 01:24:11: Download
2020/09/06 01:24:11: Dither
2020/09/06 01:24:11: Settle
2020/09/06 01:24:18: Shooting picture 118#
2020/09/06 01:25:19: Download
2020/09/06 01:25:19: Dither
2020/09/06 01:25:19: Settle
2020/09/06 01:25:38: Shooting picture 119#
2020/09/06 01:26:39: Download
2020/09/06 01:26:39: Dither
2020/09/06 01:26:39: Settle
2020/09/06 01:26:52: Shooting picture 120#
2020/09/06 01:27:53: Download
2020/09/06 01:27:53: Dither
2020/09/06 01:27:53: Settle
2020/09/06 01:28:20: Shooting picture 121#
2020/09/06 01:29:21: Download
2020/09/06 01:29:21: Dither
2020/09/06 01:29:21: Settle
2020/09/06 01:29:42: Shooting picture 122#
2020/09/06 01:30:43: Download
2020/09/06 01:30:43: Dither
2020/09/06 01:30:43: Settle
2020/09/06 01:30:50: Shooting picture 123#
2020/09/06 01:31:51: Download
2020/09/06 01:31:51: Dither
2020/09/06 01:31:51: Settle
2020/09/06 01:31:59: Shooting picture 124#
2020/09/06 01:32:59: Download
2020/09/06 01:32:59: Dither
2020/09/06 01:32:59: Settle
2020/09/06 01:34:00: Settle Failed
2020/09/06 01:34:00: Shooting picture 125#
2020/09/06 01:35:01: Download
2020/09/06 01:35:01: Dither
2020/09/06 01:35:01: Settle
2020/09/06 01:35:36: Shooting picture 126#
2020/09/06 01:36:37: Download
2020/09/06 01:36:37: Dither
2020/09/06 01:36:37: Settle
2020/09/06 01:37:37: Shooting picture 127#
2020/09/06 01:38:37: Download
2020/09/06 01:38:43: Dither
2020/09/06 01:38:43: Settle
2020/09/06 01:39:44: Settle Failed
2020/09/06 01:39:44: Shooting picture 128#
2020/09/06 01:40:45: Download
2020/09/06 01:40:45: Dither
2020/09/06 01:40:45: Settle
2020/09/06 01:41:16: Shooting picture 129#
2020/09/06 01:42:17: Download
2020/09/06 01:42:17: Dither
2020/09/06 01:42:17: Settle
2020/09/06 01:42:27: Shooting picture 130#
2020/09/06 01:43:27: Download
2020/09/06 01:43:27: Dither
2020/09/06 01:43:27: Settle
2020/09/06 01:43:49: Shooting picture 131#
2020/09/06 01:44:49: Download
2020/09/06 01:44:49: Dither
2020/09/06 01:44:49: Settle
2020/09/06 01:45:05: Shooting picture 132#
2020/09/06 01:46:05: Download
2020/09/06 01:46:05: Dither
2020/09/06 01:46:05: Settle
2020/09/06 01:46:14: Shooting picture 133#
2020/09/06 01:47:15: Download
2020/09/06 01:47:15: Dither
2020/09/06 01:47:15: Settle
2020/09/06 01:47:30: Shooting picture 134#
2020/09/06 01:48:31: Download
2020/09/06 01:48:31: Dither
2020/09/06 01:48:31: Settle
2020/09/06 01:48:40: Shooting picture 135#
2020/09/06 01:49:41: Download
2020/09/06 01:49:41: Dither
2020/09/06 01:49:41: Settle
2020/09/06 01:49:51: Shooting picture 136#
2020/09/06 01:50:51: Download
2020/09/06 01:50:51: Dither
2020/09/06 01:50:51: Settle
2020/09/06 01:50:58: Shooting picture 137#
2020/09/06 01:51:59: Download
2020/09/06 01:51:59: Dither
2020/09/06 01:51:59: Settle
2020/09/06 01:52:06: Shooting picture 138#
2020/09/06 01:53:07: Download
2020/09/06 01:53:07: Dither
2020/09/06 01:53:07: Settle
2020/09/06 01:53:15: Shooting picture 139#
2020/09/06 01:54:15: Download
2020/09/06 01:54:15: Dither
2020/09/06 01:54:15: Settle
2020/09/06 01:54:25: Shooting picture 140#
2020/09/06 01:55:25: Download
2020/09/06 01:55:25: Dither
2020/09/06 01:55:25: Settle
2020/09/06 01:55:35: Shooting picture 141#
2020/09/06 01:56:35: Download
2020/09/06 01:56:35: Dither
2020/09/06 01:56:35: Settle
2020/09/06 01:56:45: Shooting picture 142#
2020/09/06 01:57:45: Download
2020/09/06 01:57:45: Dither
2020/09/06 01:57:45: Settle
2020/09/06 01:58:07: Shooting picture 143#
2020/09/06 01:59:07: Download
2020/09/06 01:59:07: Dither
2020/09/06 01:59:07: Settle
2020/09/06 01:59:15: Shooting picture 144#
2020/09/06 02:00:15: Download
2020/09/06 02:00:15: Dither
2020/09/06 02:00:15: Settle
2020/09/06 02:02:15: Settle Failed
2020/09/06 02:02:15: Shooting picture 145#
2020/09/06 02:03:16: Download
2020/09/06 02:03:16: Dither
2020/09/06 02:03:16: Settle
2020/09/06 02:03:23: Shooting picture 146#
2020/09/06 02:04:23: Download
2020/09/06 02:04:23: Dither
2020/09/06 02:04:23: Settle
2020/09/06 02:04:57: Shooting picture 147#
2020/09/06 02:05:57: Download
2020/09/06 02:05:57: Dither
2020/09/06 02:05:57: Settle
2020/09/06 02:06:59: Settle Failed
2020/09/06 02:06:59: Shooting picture 148#
2020/09/06 02:07:59: Download
2020/09/06 02:07:59: Dither
2020/09/06 02:07:59: Settle
2020/09/06 02:08:09: Shooting picture 149#
2020/09/06 02:09:09: Download
2020/09/06 02:09:09: Dither
2020/09/06 02:09:09: Settle
2020/09/06 02:09:37: Shooting picture 150#
2020/09/06 02:10:37: Download
2020/09/06 02:10:37: Dither
2020/09/06 02:10:37: Settle
2020/09/06 02:10:57: Shooting picture 151#
2020/09/06 02:11:57: Download
2020/09/06 02:11:58: Dither
2020/09/06 02:11:58: Settle
2020/09/06 02:12:05: Shooting picture 152#
2020/09/06 02:13:05: Download
2020/09/06 02:13:05: Dither
2020/09/06 02:13:05: Settle
2020/09/06 02:14:07: Settle Failed
2020/09/06 02:14:07: Shooting picture 153#
2020/09/06 02:15:07: Download
2020/09/06 02:15:07: Dither
2020/09/06 02:15:07: Settle
2020/09/06 02:15:29: Shooting picture 154#
2020/09/06 02:16:29: Download
2020/09/06 02:16:29: Dither
2020/09/06 02:16:29: Settle
2020/09/06 02:16:53: Shooting picture 155#
2020/09/06 02:17:53: Download
2020/09/06 02:17:53: Dither
2020/09/06 02:17:53: Settle
`
    .trim()
    .split('\n')
    .map(e => {
        const [timeString, label] = e.split(': ');
        const time = new Date(timeString).getTime();
        return { time, label };
    });

export default events;
