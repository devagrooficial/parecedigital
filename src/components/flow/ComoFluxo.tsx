import {
	ReactFlow,
	Background,
	BackgroundVariant,
	Handle,
	MarkerType,
	Position,
	type Edge,
	type Node,
	type NodeProps,
	type NodeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { STEPS, type Step } from '../../lib/steps';
import { ICONS } from '../../lib/icons';

// Diagrama horizontal das etapas. Só é montado em telas largas (ver Como.astro);
// em telas menores a página mostra a mesma sequência como lista vertical.

// 4 nós + 3 vãos = 1058px, dentro da coluna útil de 1100px com ~20px de folga nas laterais, sem reduzir o zoom.
const NODE_W = 212;
const NODE_H = 356;
const GAP = 70;

type StepNodeType = Node<{ step: Step; primeiro: boolean; ultimo: boolean }, 'step'>;

function StepCard({ data }: NodeProps<StepNodeType>) {
	const { step, primeiro, ultimo } = data;
	return (
		<div
			className="flex flex-col rounded-[14px] border border-hairline bg-cream-card p-[18px] shadow-[0_1px_0_rgb(26_21_18/0.04)] transition-colors hover:border-accent/60"
			style={{ width: NODE_W, height: NODE_H }}
		>
			{!primeiro && <Handle type="target" position={Position.Left} isConnectable={false} />}
			<div className="mb-4 flex items-start justify-between">
				<span className="grid size-10 place-items-center rounded-[10px] bg-accent text-white">
					<svg
						width="21"
						height="21"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.7"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
						dangerouslySetInnerHTML={{ __html: ICONS[step.icone] }}
					/>
				</span>
				<span className="font-mono text-[13px] text-rust-dark">{step.numero}</span>
			</div>
			<p className="mb-2 font-serif text-[20px] leading-[1.2] font-semibold text-ink">{step.titulo}</p>
			<p className="text-[14px] leading-[1.55] text-muted">{step.texto}</p>
			<span className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-hairline-strong px-3 py-1 font-mono text-[12px] text-ink">
				<span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
				{step.meta}
			</span>
			{!ultimo && <Handle type="source" position={Position.Right} isConnectable={false} />}
		</div>
	);
}

const nodeTypes: NodeTypes = { step: StepCard };

const nodes: StepNodeType[] = STEPS.map((step, i) => ({
	id: `etapa-${i + 1}`,
	type: 'step',
	position: { x: i * (NODE_W + GAP), y: 0 },
	width: NODE_W,
	height: NODE_H,
	data: { step, primeiro: i === 0, ultimo: i === STEPS.length - 1 },
	draggable: false,
	selectable: false,
	focusable: false,
}));

const edges: Edge[] = STEPS.slice(0, -1).map((_, i) => ({
	id: `fluxo-${i + 1}-${i + 2}`,
	source: `etapa-${i + 1}`,
	target: `etapa-${i + 2}`,
	animated: true,
	focusable: false,
	markerEnd: { type: MarkerType.ArrowClosed, color: '#ED5A2F', width: 16, height: 16 },
	style: { stroke: '#ED5A2F', strokeWidth: 1.75 },
}));

export default function ComoFluxo() {
	return (
		<div className="flow-canvas h-[392px] w-full">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				nodeTypes={nodeTypes}
				fitView
				fitViewOptions={{ padding: 0.01, maxZoom: 1 }}
				minZoom={0.4}
				maxZoom={1}
				nodesDraggable={false}
				nodesConnectable={false}
				nodesFocusable={false}
				edgesFocusable={false}
				elementsSelectable={false}
				panOnDrag={false}
				panOnScroll={false}
				zoomOnScroll={false}
				zoomOnPinch={false}
				zoomOnDoubleClick={false}
				preventScrolling={false}
			>
				<Background variant={BackgroundVariant.Dots} gap={20} size={1.4} color="#D8CCBE" />
			</ReactFlow>
		</div>
	);
}
