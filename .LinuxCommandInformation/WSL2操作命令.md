更新WSL

```shell
wsl --update
```

### 列出已安装的 Linux 发行版

```shell
wsl --list --verbose
```

### 检查 WSL 状态

```shell
wsl --status
```

### 关闭

```shell
wsl --shutdown
```

### 立即终止所有正在运行的发行版和 WSL 2 轻量级实用工具虚拟机。 在需要重启 WSL 2 虚拟机环境的情形下，例如[更改内存使用限制](https://docs.microsoft.com/zh-cn/windows/wsl/vhd-size)或更改 [.wslconfig 文件](https://docs.microsoft.com/zh-cn/windows/wsl/manage#)，可能必须使用此命令。

```shell
wsl --terminate <Distribution Name>
```

详细命令可见：[WSL的命令参考](https://docs.microsoft.com/zh-cn/windows/wsl/basic-commands)

