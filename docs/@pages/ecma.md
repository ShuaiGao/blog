
ECMA

# Common anguage Infrastructure(CLI)
 Partition I:
 Concepts and Architecture

# 通用语言基础设施

第一部分：

概念和架构

## Foreword

This fifth edition cancels and replaces the fourth edition. Changes from the previous edition( and thus also ISO/IEC 23271:2006) were made to enhance and update this Standard.

本第五版取消并代替第四版。 对上一版本（以及 ISO/IEC 23271:2006）进行了更改以增强和更新本标准。

The Following features hace been added, extended or clarified in the Standard:

- The presentation of the rules for assignment compatibility($1.8.7, $Ⅲ.1.8.1.2.3) has been extensively revised to a more precise and clearer relation-based format.
- The presentation of the verification rules for many IL instructions has been revised to be more precise and clearer by building upon the revisions to the presentation of assignment compatibility.
- The presentation of delegate signature compatibility has been revised a long the same lines as assignment compatibility.
- The verification rules for the IL newobj instruction have been extended to cover general delegate creation.
- The dispatch rules for variance($Ⅱ.12.2) have been extended to define resolutions for the ambiguities that can arise.
- Type forwarders have been added to support the relocation of types between libraries($Ⅱ.6.8)

标准中添加、扩展或阐明了以下特性：

- 分配兼容性规则的表示（$1.8.7，$Ⅲ.1.8.1.2.3）已被广泛修改为更精确和更清晰的基于关系的格式。
- 许多 IL 指令的验证规则的表示已通过对分配兼容性表示的修订进行了修订，使其更加精确和清晰。
- 代表签名兼容性的表示已被修改为与分配兼容性相同的行。
- IL newobj 指令的验证规则已扩展为涵盖一般委托创建。
- 差异调度规则（$Ⅱ.12.2）已扩展为定义可能出现的歧义的解决方案。
- 添加类型转发器，支持库之间类型的重定位($Ⅱ.6.8)

The following changes of behavior have been made to Standard:

- The semantics of variance has been redefined making it a core feature of the CLI. In the previous edition of the Standard varance could be ignored by languages not wishing to support it ($1.8); as exact type matches always took prevedence over matches-by-variance. In this edition the dispatch rules for interfaces $Ⅱ.12.2)allow a match-by-variance to take precedence over an exact match, so all language implementation targeting the CLI must be aware of the behavior even if it is not support in language($1.8)

变异的语义已被重新定义，使其成为 CLI 的核心特性。 在标准的先前版本中，不希望支持它的语言可以忽略它（$1.8）； 因为精确类型匹配总是优先于按方差匹配。 在此版本中，接口 $Ⅱ.12.2) 的调度规则允许按变量匹配优先于精确匹配，因此所有针对 CLI 的语言实现都必须了解该行为，即使它在语言中不受支持（ $1.8）

- Additional requirements on ilasm to metadata conversion. The left-to-right order of interfaces listed in a type header($Ⅱ.10.2) must now be preserved as a top-to-bottom order in the InterfaceImpltable($Ⅱ.22.23); and the top-to-bottom of method definitions($Ⅱ.10.2, $Ⅱ.15) must now be preserved as a top-to-bottom order in the MethodDef table($Ⅱ.22.26). Both these additional requirements are required to support the revised variance sematics.

对 ilasm 到元数据转换的附加要求。 类型标头（$Ⅱ.10.2）中列出的接口从左到右的顺序现在必须在 InterfaceImpltable（$Ⅱ.22.23）中保留为从上到下的顺序； 并且方法定义的从上到下（$Ⅱ.10.2，$Ⅱ.15）现在必须作为从上到下的顺序保留在 MethodDef 表（$Ⅱ.22.26）中。 这两项额外要求都是支持修订后的方差语义所必需的。

- System.Math and System.Double have been modified to better confirm to IEEE (insert correct ref to IEEE standard here, and ref lib XML)

- System.Math 和 System.Double 已被修改以更好地与 IEEE 确认（在此处插入正确的 IEEE 标准参考，并参考 lib XML）

The following types have been added to the Standard or have been significantly updated(* represents an update)

以下类型已添加到标准或已显着更新（* 代表更新）

略过表格

Technical Report 89(TR89), which was submitted during the third edition of the Ecma standard, will no longer be part of the submission. TR89 specified a collection of generic types, to help enhance inter-language interoperabiliby, under consideration for inclusion in a future version of the standard. That consideration has now occurred and TR89 has fulfilled its role. A selection of the types covered in TR89 has been introduced into this edition of the standard. An archive version of TR89 will continue to be available from Ecma.

在 Ecma 标准第三版期间提交的技术报告 89（TR89）将不再是提交的一部分。 TR89 指定了一组通用类型，以帮助增强语言间的互操作性，正在考虑将其包含在标准的未来版本中。 这种考虑现在已经发生，TR89 已经发挥了作用。 TR89 中涵盖的一系列类型已被引入此版本的标准中。 Ecma 将继续提供 TR89 的存档版本。

The following companies and organizations have participated in the development of this standard, and their contributions are gratefully acknowledged: Eiffel Software, Kahu Research, Microsoft Corporation, Novell Corporation, Twin Roots. For previous editions, the following companies and organizations are also acknowledged: Borland, Fujitsu Software Corporation, Hewlett-Packard, Intel Corporation, IBM Corporation, IT University of Copenhagen, Jagger Software Ltd., Monash University, Netscape, Phone.Com, Plum Hall, and Sun Microsystem.

以下公司和组织参与了本标准的制定，并感谢他们的贡献：Eiffel Software、Kahu Research、Microsoft Corporation、Novell Corporation、Twin Roots。 对于以前的版本，以下公司和组织也得到认可：Borland、富士通软件公司、惠普、英特尔公司、IBM 公司、哥本哈根 IT 大学、Jagger Software Ltd.、莫纳什大学、Netscape、Phone.Com、Plum Hall 和 Sun 微系统。


## 1 Scope

The International Standard defines the Common Language Infrastructure(CLI) in whick applications written in multiple high-level languages can bue executed in different system environments without the need to rewrite those applications to take into consideration the unique characteristics of those environments. This International Stansard consists of the following parts:

国际标准定义了公共语言基础设施 (CLI)，其中以多种高级语言编写的应用程序可以在不同的系统环境中执行，而无需重写这些应用程序以考虑这些环境的独特特性。 本国际标准由以下部分组成：

- Partition Ⅰ: Concepts and Architecture - Describes the overall architecture of the CLI, and provides the normative description of the Common Type System(CTS), the Virtual Execution System(VES), and the Common Language Specification(CLS). It also provides an informative description of the metadata.

- 第一部分：概念和架构 - 描述 CLI 的整体架构，并提供通用类型系统（CTS）、虚拟执行系统（VES）和通用语言规范（CLS）的规范性描述。 它还提供了元数据的信息描述。


- Partition Ⅱ: Metadata Definition and Semantics - Provides the normative description of the metadata: its physical layout(as a file format), its logical content(as a set of tables and their relations ship), and its semantics( as seen from a hypothetical assembler, ilasm).

- 第二部分：元数据定义和语义——提供元数据的规范描述：它的物理布局（作为一种文件格式），它的逻辑内容（作为一组表及其关系），它的语义（从一个假设的角度来看） 汇编程序，伊斯兰教）。


- Partition Ⅲ: CIL Instruction Set - Describes the Common Intermediate Language(CLI) instruction set.

- Partition IV: Profiles and Libraries - Provides and overview of the CLI Libraries, and a specification of their factoring into Profiles and Libraries. A companion file, CLILibrary.xml, considered to be part of this Partition, but distributed in XML format, provides details of each class, value type, and interface in the CLI Libraties.

- 第 IV 部分：配置文件和库 - 提供和概述 CLI 库，以及将它们分解为配置文件和库的规范。 伴随文件 CLILibrary.xml 被认为是此分区的一部分，但以 XML 格式分发，提供 CLI 库中每个类、值类型和接口的详细信息。

- Partition Ⅴ: Debug Interchange Format - Describes a standard way to interchange debugging information between CLI producers and consumers.

- Partition Ⅵ: Annexes - Contains some sample programs written in CLI Assembly Language(ILAssm), information about a particular implementation of an assembler, a machine-readable descripton of the CIL instruction set which can be used to derive parts of the grammar used by this assembler as well as other tools that manipulate CIL, a set of guidelines used in the design of the libraries of Partition IV, and portability considerations.

## 2 Conformance

A system claiming conformance to this International Standard shall implement all the normative requirements of this standard, and shall specify the profile( see Patrion Ⅳ Library - Profiles) that it implements. Ths minimal implementations is the Kernel Profile. A conforming implementation can also include additional functionality provided that functionality does not prevent running code written to rely solely on the profile as specified in this standard. For example, a conforming implementation can provide additional classes, new methods on existing classes, or a new interface on a standardized class, but it shall not add methods or properties to interfaces specified in this standard.

A compiler that generates Common Intermediate Language(CIL, see Partition Ⅲ) and claims conformance to this International Standard shall produce output files in the format specified in this standard, and this CIL it generates shall be correct CIL as specified in this standard. Such a compiler can also chaim that it generates verifiable code, in which case, the CIL it generates shall be verifiable as specified in this standard.

## 4 Conventions 约定

### 4.1 Orfanization

The divisons of this International Standard are organized using a hierarchy. At the top level is the `Partition`. The next level is `clause`, followed by `subclause`. Divisions within a subclause are alse referred to as subclauses. Partitions are numbered using Roman numerals. All other divisions are numbered using Arabic digits with their plave in hierarchy indicated by nested numbers. For example, Partion Ⅱ, 14.4.3.2 refers to subclause 2 in subclause 3 in subclause 4 in clause 14 in Partition Ⅱ.

本国际标准的各部分使用层次结构进行组织。

### 1.4 English description

The English description describes any details about the instructions that are not immediately apparent once the format and stack transition have been described.

在描述了格式和堆栈转换之后，英文描述描述了这些指令不能使用格式和堆栈表示的其它信息


# Partion Ⅲ CLI

Common Language Infrastucture(CLI) 
通用语言架构

Partition Ⅲ
CIL Instruction Set
通用语言架构指令系统


## 1. Introduction
介绍


* A list of exceptions that might be thrown by instruction.
* A section describing the verifiability condition associated with the instruction.
* 一个描述指令相关可验证性的部分

### 1.1 Data Types
数据类型

#### 1.1.1 Numeric data types

* The CLI only operates on the numeric types int32(4-byte signed integers), int64(8-byte signed integers), native int(native-size integers), and F(native-size floating-point numbers). However, the CIL instruction set allows additional data types to be implemented:
* **Short integers**: The evaluation stack only holds 4- or 8-byte integers, but other locations 

## 1.5 Operand type table 

操作数类型表

Many CIL operations take numeric operands on the stack. These operations fail into several categories, depending on how they deal with the types of the operands. The following tables summarize the valid kinds of operand types and the type of the result. Notive that the type referred to here is the type as tracked by the CLI rather than the more detailed types used by tools such as CIL verfication. The types tracked by the CLI are: int32, int64, native int, F, O, and &.

Table 2 show the result type for A op B--where op is add, div, mul rem, or sub--for each possible combination of operand types. Boxed holding simply a result type, apply to all five instructions. Boxes marked x indicate an invalid CIL instruction. Shaded boxes indicate a CIL instruction that is not verifiable. Boxes with a list of instructions are valid only for those instructions.

## 2 Prefixes to instructions

### 2.3 readonly. (prefix) - following instruction returns a controlled-mutability managed pointer

## 3 Base instructions
基础指令
These instructions from a "Turing Complete" set of basic operations. They are independent of object model that might be employed. Operations that are specifically related to the CTS's object model are contained in the Object Model Instructions section.

这些指令集来自一组“图灵完备”的基本操作。他们独立于可能使用的对象模型。与CTS的对象模型相关的操作，包含在对象模型说明部分中。

### 3.1 add - add numeriv values

| Format | Assembly Format | Description |
|-|-|-|
| 58 | add | Add two values, returning a new value. |

**Stack Transition**:
..., value1, value2 -> ..., result
**Desctiption:**
The add instruction adds value2 to value1 and pushes the result on the stack. Overflow is not detected for integral operations(but see add.ovf); floating-point overflow returns +inf or -inf.

add 指令将value2加到value1上，并且推送结果（result）到栈上。完整运算没有检测溢出（但请参间add.ovf）；浮点运算溢出返回 +inf或-inf。

The acceptable operand types and their corresponging result data type are encapsulated in Table 2:Binary Numeric Operations.

可接受的操作数类型及其对应结果数据类型封装在表2:二进制数值运算。

**Exceptions：**
None

Correctness And Verifiability:
See Table 2:Binary Numeric Operations.

正确性和可验证性
见表2:二进制数值运算。

### 3.5 beq.\<length> - branch on equal

相等的分支

| Format     | Assembly Format | Description                            |
| ---------- | --------------- | -------------------------------------- |
| 38\<int32> | beq target      | Branch to target if equal.             |
| 2B\<int8>  | beq.s target    | Branch to target if equal, short form. |

**Stack Transition:**

..., -> ...

**Description:**

The beq instruction transfers control to target if value1 is equal to value2. The effect is identical to performing a ceq instruction followed by a brtrue target. target is representedas a signed offset(4 bytes for beq, 1 byte for beq.s) from the beginning of the instruction following the current instruction.

如果 value1 等于 value2，则 beq 指令将控制转移到目标。 效果与执行 ceq 指令后跟 brtrue 目标相同。 target 表示为从当前指令之后的指令开头开始的有符号偏移量（beq 为 4 个字节，beq.s 为 1 个字节）。

### 3.15 br.\<length> - unconditional branch

无条件分支

| Format     | Assembly Format | Description                   |
| ---------- | --------------- | ----------------------------- |
| 38\<int32> | br target       | Branch to target.             |
| 2B\<int8>  | br.s target     | Branch to target, short form. |

**Stack Transition:**

..., -> ...

**Description:**

The br instruction unconditionally transfers control to target. target is represented as a signed offset(4 bytes for br, 1 byte for br.s) from the beginning of the instruction following the current instruction.

br 指令无条件地将控制转移到目标。 target 表示为从当前指令之后的指令开头开始的有符号偏移量（br 为 4 字节，br.s 为 1 字节）。

If the target instruction has one or more prefix codes, control can only be transferred to the first of these prefixes.

如果目标指令有一个或多个前缀代码，则控制只能转移到这些前缀中的第一个。

Control transfers into and out of try, catch, filter, and finally blocks cannot be performed by this instruction.(Such transfers are severely restricted and shall use the leave instruction instead; see Partition I for details).

此指令无法执行进出 try、catch、filter 和 finally 块的控制转移。（此类转移受到严格限制，应使用 leave 指令代替；详见第一部分）。

[Rationale: While a leave instruction can be used instead of a br instruction when the evaluation stack is empty, doing so might increase the resource required to compile from CIL to native code and/or lead to inferior native code. Therefore CIL generators should use a br instruction in perference to a leave instruction when both are valid. end rationale]

【理由：虽然当评估堆栈为空时可以使用离开指令而不是 br 指令，但这样做可能会增加从 CIL 编译为本机代码所需的资源和（或）导致劣质本机代码。 因此，当两者都有效时，CIL 生成器应该使用 br 指令而不是 leave 指令。 结束理由】

### 3.17 brfalse.\<length> - branch on false, null, or zero

| Format     | Assembly Format  | Description                                                  |
| ---------- | ---------------- | ------------------------------------------------------------ |
| 39\<int32> | brfalse target   | Branch to target if value is zero(false).                    |
| 2C<int8>   | brfalse.s target | Branch target if value is zero(false), short form            |
| 39\<int32> | brnull target    | Branch to target if value is null(alias for brfalse)         |
| 2C\<int8>  | brnull.s target  | Branch to  target if value is null(alias for brfalse.s), short form. |
| 39\<int32> | brzero target    | Branch to target if value is zero(alias for brfalse).        |
| 2C\Cint8>  | brzero.s target  | Branch to target if value is zero(alias for brfalse.s), short form. |

**Stack Transition:**

..., value -> ...

**Desctiption:**

The brfalse instruction transfers control to target if value (of type int32, int64, object reference, managed pointer, unmanaged pointer or native int) is zero(false). If value is non-zero(true), execution continues at the next instruction.

如果值（类型为 int32、int64、对象引用、托管指针、非托管指针或本机 int）为0（假），则 brfalse 指令将控制转移到目标。 如果值非0（真），则在下一条指令处继续执行。

Target is represented as a signed offset(4 bytes for brfalse, 1byte for brfalse.s) from the beginning of the instruction following the current instruction.

### 3.22 cgt - compare greater than

| Format | Assembly Format | Description                                             |
| ------ | --------------- | ------------------------------------------------------- |
| FE 02  | Cgt             | Push 1 (of type int32) if value1 > value2, else push 0. |

**Stack Transition:**

..., value1, value2 -> ..., result

**Description:**

The cgt instruction compares value1 and value2. If value1 is strictly greater than value2, then 1(of type int32) is pushed on the stack. Otherwise, 0(of type int32) is pushed on the stack.

For floating-point numbers, cgt returns 0 if the numbers are unordered(that is, if one or both of the arguments are NaN).

对于浮点数，如果数字是无序的（即，如果一个或两个参数都是 NaN），则 cgt 返回 0。

As with IEC 60559:1989, infinite values are ordered with respect to normal numbers(e.g., +infinity>5.0>-infinity).

### 3.39 ldarga.\<length> - load an argument address

| Format | Assembly Format | Description      |
| ------ | --------------- | ---------------- |
| FF 0A\<unsigned int16> | ldarga argNum | Fetch the address of argument argNum. |
| OF\<unsigned int8> | ldarga.s argNum | Fetch the address og argument argNum, short form. |

**Stack Transition:**

..., -> ..., address of argument number argNum

**Desctiption:**

The ldarga instruction ftches the address(of type &, i.e., managed pointer) of the argNum'th argument, where arguments are numbered 0 onwards. The address will always be aligned to a natural boundary on the target machine (cf. cpblk an init blk). The short form (ldargs.s) should be used for argument numbers 0-255. The result is managed pointer (type &).

ldarga 指令获取 argNum'th 参数的地址（类型为 &，即托管指针），其中参数从 0 开始编号。 该地址将始终与目标机器上的自然边界对齐（参见 cpblk 和 init blk）。 短格式 (ldargs.s) 应用于参数编号 0-255。 结果是托管指针（类型 &）。

For procedures that take a variable-length argument list, the ldarga instruction can be used only for the initial fixed arguments, not those in the variable part of the signature.

对于采用可变长度参数列表的过程，ldarga 指令只能用于初始固定参数，不能用于签名可变部分中的参数。

### 3.4.1 ldftn - load method pointer

| Format     | Assembly Format | Description                                                  |
| ---------- | --------------- | ------------------------------------------------------------ |
| FE 06\<T\> | ldftn method    | Push a pointer to a method reference by method, on the stack. |

**Stack Transition:**

... -> ..., ftn

**Desctiption:**

The ldftn instruction pushes a method pointer to the native code implementing the method described by method(a metadata token, either a methoddef or methodref), or to some other implementation-specific description of method (see Note) onto the stack). The value pushed can be called using the calli instruction if it references a managed method (or a stub that transitions from managed to unmanaged code). It may alse be used to construct a delegate, stored in a variable, etc.

ldftn 指令将方法指针推送到实现由方法描述的方法的本机代码（元数据标记，methoddef 或 methodref），或将方法的某些其他特定于实现的描述（见注）推送到堆栈上）。 如果推送的值引用托管方法（或从托管代码转换到非托管代码的存根），则可以使用 calli 指令调用推送的值。 它还可以用于构造委托、存储在变量中等。

The CLI resolves the method pointer according to the rules specified in 1.12.4.1.3(Computed destinations), except that the destination is computed with respect to the class specified by method.

CLI 根据 1.12.4.1.3（计算的目标）中指定的规则解析方法指针，但目标是相对于方法指定的类计算的。

The value returned points to native code (see Note) using the calling convention specified by method. Thus a method pointer can be passed to unmanaged native code(e.g., as a callback routine). Note that the address computed by this instruction can be to a thunk produced specially for this purpose(for excmple, to re-enter the CIL interpreter when a native version of the method isn't available).

返回的值使用方法指定的调用约定指向本机代码（见注）。 因此，可以将方法指针传递给非托管本机代码（例如，作为回调例程）。 请注意，此指令计算的地址可以是专门为此目的生成的 thunk（例如，当方法的本机版本不可用时重新进入 CIL 解释器）。



### 3.42 ldind.\<type> - load value indirect onto the stack

将值间接加载到堆栈上

| Format | Assembly Format | Description                                                  |
| ------ | --------------- | ------------------------------------------------------------ |
| 46     | ldind.i1        | Indrect load value of type int8 as int32 on the stack.       |
| 48     | ldind.i2        | Indirect load value of type int16 as int32 on the stack.     |
| 4A     | ldind.i4        | Indirect load value of type int32 as int32 on the stack.     |
| 4C     | ldind.i8        | Indirect load value of type int64 as int64 on the stack.     |
| 47     | ldind.u1        | Indirect load value of type unsigned int8 as int32 on the stack. |
|        |                 |                                                              |

**Stack Transition:**

..., addr -> ..., value

**Description:**

The ldind.\<type> instruction indirectly loads a value from address addr (an unmanaged pointer, native int, or managed pointer, &) onto the stack. The source value is indicated by the instruction suffix. The ldind.ref instruction is a shortcut for a ldobj instruction that specifies the type pointed at by addr, all of the other ldind instructions are shortcuts for ldobj instruction that specifies the corresponding built-in value class.

ldind.\<type> 指令将地址 addr（非托管指针、本机 int 或托管指针 &）中的值间接加载到堆栈上。 源值由指令后缀表示。 ldind.ref 指令是指定 addr 指向的类型的 ldobj 指令的快捷方式，所有其他 ldind 指令都是指定相应内置值类的 ldobj 指令的快捷方式。

If required, values are converted to the representation of the intermediate type (1.8.7) of the \<type> in the instruction when loaded onto the stack.

### 3.48 mul - multiply values

| Format | Assembly Format | Description      |
| ------ | --------------- | ---------------- |
| 5A     | mul             | Multiply Values. |

**Stack Transition:**

..., value1, value2 -> ..., result

**Desctiption:**

The mul instruction multiplies value1 by value2 and pushes the result on the stack. Integral operations silently truncate the upper bits on overflow(see mul.ovf).

For floating-point types, 0 x infinity = NaN.

The acceptable operand types and their corresponding result data types are encapsulated in Table 2: Binary Numeric Operations.

### 3.50 neg - negate

| Format | Assembly Format | Description   |
| ------ | --------------- | ------------- |
| 65     | Neg             | Negate value. |

**Stack Transition:**

..., value -> ..., result

**Desctiption:**

The neg instruction negates value and pushes the result on top of the stack. The return type is the same as the operand type.

neg 指令取反值并将结果压入栈顶。 返回类型与操作数类型相同。

Negation of integral values is standard twos-complement negation. In particular, negating the most negative number(which does not have a positive counterpart) yields the most negative number. To detect this overflow use the sub.ovf instruction instead(i.e., subtract from 0).

整数值的否定是标准的二进制补码否定。 特别是，否定最负数（没有正数对应物）会产生最负数。 要检测此溢出，请改用 sub.ovf 指令（即从 0 中减去）。

Negating a floating-point number cannot overflow; negating NaN returns NaN.

对浮点数求反不能溢出； 否定 NaN 返回 NaN。

The acceptable operand types and their corresponding result data types are encapsulated in table3: Unary Numeric Operations.

可接受的操作数类型及其对应的结果数据类型封装在表3：一元数值运算中。

**Exceptions:**

None.

**Correctness and Verifiability:**

See Table 3: Unary Numeric Operations.

### 3.52 not - bitwise complement

| Format | Assembly Format | Description         |
| ------ | --------------- | ------------------- |
| 66     | Not             | Bitwise complement. |

**Stack Transition:**

..., value -> ..., result

**Description:**

The not instruction computes the bitwise complement of the integer value on top of the stack and leaves the result on top of the stack. The return type is the same as the operand type.

not 指令计算栈顶部整数值的按位取反，并将结果留在堆栈顶部。 返回类型与操作数类型相同。

### 3.59 shr - shift integer right

| Format | Assembly Format | Description                                               |
| ------ | --------------- | --------------------------------------------------------- |
| 63     | Shr             | Shift an integer right(shift in sign), return an integer. |

**Stack Transition:**

..., value, shiftAmount -> ..., result

**Description:**

The shr instruction shifts value(int32, int64 or native int) right by the number of bits specified by _shiftAmount_. _shiftAmount_ is of type int32 or native int. The return value is unspecified if _shiftAmount_ is greater than or equal to the width of value. shr replicates the high order bit on each shift, preserving the sign of the original value in result. See Table 6: Shift Operations for details of which operand types are allowed, and their corresponding result type.

shr 指令将值（int32、int64 或 native int）右移 _shiftAmount_ 指定的位数。 _shiftAmount_ 的类型为 int32 或原生 int。 如果 _shiftAmount_ 大于或等于 value 的宽度，则返回值未指定。 shr 在每次移位时复制高位，在结果中保留原始值的符号。 有关允许的操作数类型及其相应结果类型的详细信息，请参见<u>表 6：移位操作</u>。

### 3.67 xor - bitwise XOR

| Format | Assembly Format | Description                                        |
| ------ | --------------- | -------------------------------------------------- |
| 61     | xor             | Bitwise XOR of integer values, returns an integer. |

**Stack Transition:**

..., value1, value2 -> ..., result

**Description:**

The xor instruction computes the bitwise XOR of value1 and value2 and leaves the result on the stack. 

xor 指令计算 value1 和 value2 的按位异或，并将结果留在堆栈中。

The acceptable operand types and their corresponding result data type is encapsulated in Table 5: Integer Operations.

**Exceptions:**

None.

**Correctness and Verifiability:**

see Table 5: Integer Operations.

## 4 Object model instructions

### 4.1 box - convert a boxable value to its boxed form

| Format | Assemble Format | Description                                |
| ------ | --------------- | ------------------------------------------ |
| 8C\<T> | box typeTok     | Convert a boxable value to its boxed form. |

**Stack Transition:**

..., val -> ..., obj

**Description:**

If typeTok is a value type, the box instruction converts val to its boxed form. When typeTok is a non-nullable type, this is done by creating a new object and copying the data from val into the newly allocated object. If it is a nullable type, this is done by inspecting val's HasValue property; if it is false, a null reference is pushed onto the stack; otherwise, the result of boxing val's Value property is pushed onto the stack.

如果typeTok是值类型，则Box指令将Val转换为装箱格式。 当typeTok是非可空的类型时，这是通过创建新对象并将数据从val复制到新分配的对象来完成的。 如果它是可空的类型，这是通过检查Val的HasValue属性来完成的; 如果是空的，则将空引用推入堆栈; 否则，拳击val值属性的结果被推到堆栈上。

If typeTok is reference type. the box instruction does returns val unchanged as obj.

如果typetok是引用类型。 box指令不改变Val并返回obj。

If typeTok is a generic parameter, the behavior of box instruction depends on the actual type at runtime. If this type is a value type it is boxed as above, if it is a reference type then val is not changed. However the type tracked by verifications is always "boxed" typeTok for generic parameters, regardless of whether the actural type at runtime is a value or reference type.

typeTok is a metadata token( a typedef, typeref, or typespec) indicating the type of val. typeTok can represent a value type, a reference type, or a generic parameter.

**Exceptions:**

System.OutOfMemoryException is thrown if there is insufficient memory to satisfy the request.

如果内存不足以满足请求，则抛出异常 System.outofMemoryException

System.TypeLoadException is thrown if typeTok cannot be found. (This is typically detected when CIL is converted to native code rather than at runtime.)

如果找不到typeTok，则抛出system.typeloadexception。 （当CIL转换为本机代码而不是在运行时时，通常检测到。）

### 4.2 callvirt - call a method associated, at runtime, with an object

| Format | Assemble Format | Description                              |
| ------ | --------------- | ---------------------------------------- |
| 6F\<T> | callvirt method | Call a method associated with an object. |

**Stack Transition:**

.., obj, arg1, ... argN -> ..., returnVal (not always returned)

**Description:**

The **callvirt** instruction calls a late-bound method on an object. That is, the method is chosen based on the exact type of obj rather than the compile-time class visible in the method metadata token. **callvirt** can be used to call both virtual and instance methods. See Partition 1 for a detailed description of the CIL calling sequence. The **callvirt** instruction can be immediately preceded by a **tail**. prefix to specify that the current stack frame should be released before transferring control. If the call would transfer control to a method of higher trust than the original method the stack frame will not be released.

**CallVirt **指令调用对象上的延迟方法。 也就是说，基于对OBJ的确切类型而不是在方法元数据token中可见的编译时类来选择该方法。 **CallVirt**可用于调用虚拟和实例方法。 有关CIL调用序列的详细描述，请参阅分区1。 **CallVirt**指令可以在之前的**tail**后立刻被执行。指定在传输控制之前应释放当前堆栈帧的前缀。 如果调用将控制到比原始方法更高的信任方法，则不会释放堆栈帧。

[A callee of "higher trust" is defined as one whose permission grant-set is a strict superset of the grant-set of the caller]

【“更高信任”的调用被定义为权限集是调用者权限集的严格超集】

method is metadata token (a methoddef, methodref or methodspec see Partion 2) that provides the name, class and signature of the method to call. In more detail, **callvirt** can be thought of as follows. Associated with obj is the class of which it is an instance. The CLI resolves the method to be called according to the rules specified in 1.12.4.1.3(Computed destinations).

**callvirt** pops the object and the arguments off the evaluation stack before calling the method. If the method has a return value, it is pushed on the stack upon method completion. On the callee side, the obj parameter is accessed as argument 0, arg1 as argument 1, and so on.

**CallVirt**在调用方法之前弹出对象和evaluation堆栈的参数。 如果该方法具有返回值，则在方法完成时按下堆栈上。 在被调用者侧，obj参数作为第0个参数，arg1作为第1个参数访问，等等。

### 4.6 isinst - test if an object is an instance of a class or interface

| Format | Assemble Format | Description                                                  |
| ------ | --------------- | ------------------------------------------------------------ |
| 75\<T> | isinst typeTok  | Test if obj is an instance of typeTok, returning null or an instance of that class or interface. |

**Stack Transition:**

..., obj -> ..., result

**Description:**

typeTok is a metadata token (a typeref, typedef or typespec), indicating the desired class. If typeTok is a non-nullable value type or generic parameter type it is in interpreted as "boxed" typeTok. If typeTok is a nullable type, Nullable\<T>, it is interpreted as "boxed" T.

typeTok 是元数据标记（typeref、typedef 或 typespec），指示所需的类。 如果 typeTok 是不可为空的值类型或泛型参数类型，则它被解释为“装箱”的 typeTok。 如果 typeTok 是可为空的类型 Nullable\<T>，则将其解释为“装箱”T。

The isinst instruction tests whether obj (type O) is an instance of the type typeTok.

isinst 指令测试 obj（类型 O）是否是 typeTok 类型的实例。

If the actual type (not the verifier tracked type) of obj is verifier-assignable-to the type typeTok then isinst succeeds and obj (as result) is returned unchanged while verification tracks its type as typeTok. Unlike coercions (1.6) and conversions (3.27), isinst never changes the actual type of an object and preserves object identity (see Partition 1).

如果 obj 的实际类型（不是验证者跟踪的类型）是验证者可分配给类型 typeTok 的，那么 isinst 成功并且 obj（作为结果）原封不动地返回，而验证将其类型跟踪为 typeTok。与强制转换 (1.6) 和转换 (3.27) 不同，isinst 从不更改对象的实际类型并保留对象标识（参见第 1 部分）。

If obj is null, or obj is not verifier-assignable-to the type typeTok, isinst fails and returns null.

如果 obj 为 null，或者 obj 不是可分配给类型 typeTok 的验证器，则 isinst 失败并返回 null。

**Exceptions:**

System.TypeLoadException is thrown if typeTok cannot be found. This is typically detected when CIL is converted to native code rather than at runtime.

**Correctness:**

Correct CIL ensures that typeTok is a valid typeref or typedef or typespec token, and that obj is always either null or an object reference.

正确的 CIL 确保 typeTok 是有效的 typeref 或 typedef 或 typespec 标记，并且 obj 始终为 null 或对象引用。

**Verifiability:**

Verification tracks the type of result as typeTok.

验证将结果类型跟踪为 typeTok。

### 4.7 ldelem - load element from array

| Format | Assembly Format | Description                                          |
| ------ | --------------- | ---------------------------------------------------- |
| A3\<T> | ldelem typeTok  | Load the element at index onto the top of the stack. |

**Stack Transition:**

..., array, index -> ..., value

**Description:**

The ldelem instruction loads the value of the element with index index (of type native int or int32) in the zero-based one-dimensional array array, and places it on the top of the stack. The type of the return value is indicated by the type token in the instruction.

ldelem 指令加载从零开始的一维数组数组中具有索引索引（本机 int 或 int32 类型）的元素的值，并将其放在堆栈顶部。 返回值的类型由指令中的类型标记指示。
